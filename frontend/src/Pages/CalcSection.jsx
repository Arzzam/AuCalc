import { useEffect, useState, Fragment } from "react";
import Input from "../Components/Input";
import Select from "../Components/Select";

function CalcSection(props) {
    const [subjects, setSubjects] = useState({});
    const [result, setResult] = useState();

    useEffect(() => {
        let data = {};
        props.response.map((el) => {
            data[el.id] = [el.credits, 10];
            return el;
        });

        setSubjects(data);
    }, [props.response]);

    const gradePoints = {
        O: 10,
        "A+": 9,
        A: 8,
        "B+": 7,
        B: 6,
        U: 0,
        RA: 0,
        SA: 0,
        W: 0,
    };

    function updateGrade(id, grade) {
        setSubjects((prev) => {
            prev[id] = [prev[id][0], gradePoints[grade]];
            return prev;
        });
    }

    function renderFields(data) {
        return data.map((obj) => {
            return (
                <div
                    key={obj.id}
                    className="flex flex-wrap items-center justify-between mx-auto w-fit"
                >
                    <Input
                        type="text"
                        name="code"
                        value={obj.code}
                        disabled
                        className="order-2 w-1/3 m-1 sm:w-20 sm:order-1"
                    />
                    <Input
                        type="text"
                        name="title"
                        value={obj.title}
                        disabled
                        className="order-1 w-full m-1 sm:w-96 sm:order-2"
                    />
                    <Select
                        id={obj.id}
                        updateGrade={updateGrade}
                        options={gradePoints}
                        className="order-3 w-1/4 m-1 sm:w-20"
                    />
                </div>
            );
        });
    }

    function handleSubmit(event) {
        let earnedCredit = 0,
            totalCredit = 0;

        for (let id in subjects) {
            if (subjects[id][1]) {
                earnedCredit += subjects[id][0] * subjects[id][1];
                totalCredit += subjects[id][0];
            }
        }

        let result = earnedCredit / totalCredit || 0;

        setResult(result.toFixed(3));
        event.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                {renderFields(props.response)}
                <button
                    className="h-10 px-3 m-4 font-medium text-white bg-black rounded-md"
                    type="submit"
                >
                    Calculate
                </button>
            </form>

            {result && <h1>Your GPA: {result}</h1>}
        </Fragment>
    );
}

export default CalcSection;
