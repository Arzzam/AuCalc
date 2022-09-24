import React, { useEffect, useState } from "react";
// import { GpaButton } from "../Components/Button/Button";
import Container, { H1 } from "../Components/Container/Container";
import axios from "axios";

const Gpa = () => {

    const [regulations, setRegulations] = useState();
    const [displayReg, setDisplayReg] = useState(true);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const [degrees, setDegrees] = useState();
    const [displayDeg, setDisplayDeg] = useState(true);

    const [departments, setDepartments] = useState();
    const [displayDep, setDisplayDep] = useState(true);

    const [semesters, setSemesters] = useState();
    const [displaySem, setDisplaySem] = useState(true);

    const getRegulations = () => {
        let config = {
            method: "get",
            url: "api/regulations/",
            headers: {},
        };

        axios(config)
            .then((response) => {
                setRegulations(response.data);
            })
            .catch((error) => {
                // console.log(error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getRegulations();
    }, []);

    const getDegree = (e) => {
        setDisplayReg(false);

        let config = {
            method: "post",
            url: "api/degrees/",
            headers: {},
            data: { "regulation_id": e.target.id },
        };

        axios(config)
            .then((response) => {
                setDegrees(response.data);
            })
            .catch((error) => {
                // console.log(error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const getDepartment = (e) => {
        setDisplayDeg(false);

        let config = {
            method: "post",
            url: "api/departments/",
            headers: {},
            data: { "degree_id": e.target.id },
        };

        axios(config)
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                // console.log(error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const getSemesters = (e) => {
        setDisplayDep(false);

        let config = {
            method: "post",
            url: "api/semesters/",
            headers: {},
            data: { "department_id": e.target.id },
        };

        axios(config)
            .then((response) => {
                // console.log(response.data);
                setSemesters(response.data);
            })
            .catch((error) => {
                // console.log(error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
                // setDisplayDep(false);
            });
    };


    return (
        <Container>
            <div className=" flex-1 justify-self-center text-center">
                <H1>GPA
                </H1>
                <h4>Select Regulation</h4>
            </div>

            <div className=" flex-1 justify-self-center text-center">
                {loading && <h1>Loading...</h1>}
                {error && <h1>{error.message}</h1>}
                {regulations &&
                    displayReg &&
                    regulations.map((regulationData) => {
                        return (
                            <button
                                className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                                key={regulationData.id}
                                id={regulationData.id}
                                onClick={getDegree}
                            >
                                {regulationData.data}
                            </button>
                        );
                    })}
                {degrees &&
                    displayDeg &&
                    degrees.map((degreeData) => {
                        return (
                            <button
                                className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                                key={degreeData.id}
                                id={degreeData.id}
                                onClick={getDepartment}
                            >
                                {degreeData.data}
                            </button>
                        );
                    })}
                {departments &&
                    displayDep &&
                    departments.map((departmentData) => {
                        return (
                            <button
                                className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                                key={departmentData.id}
                                id={departmentData.id}
                                onClick={getSemesters}
                            >
                                {departmentData.data}
                            </button>
                        );
                    })}
                {semesters &&
                    displaySem &&
                    semesters.map((semesterData) => {
                        return (
                            <button
                                className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
                                key={semesterData.id}
                                id={semesterData.id}
                            // onClick={getSubjects}
                            >
                                {semesterData.data}
                            </button>
                        );
                    })}
            </div>
        </Container>
    );
};

export default Gpa;
