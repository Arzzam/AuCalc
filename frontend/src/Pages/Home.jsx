import React from "react";
import { useNavigate } from "react-router-dom";
import Container, { H1 } from "../Components/Container/Container";
import SectionPane from "../Components/SectionPane";
// import { HomeButton } from "../Components/Button/Button";

const Home = () => {
    const navigate = useNavigate();
    const switchHandler = (e) => {
        navigate(`/${e.target.id}`, { replace: true });
    };

    return (
        <Container>
            <div className="flex-1 text-center justify-self-center">
                <H1>AuCalc
                </H1>
                {/* <h2 className="p-2 text-xl font-normal font-lora">
          GPA and CGPA Calculator
        </h2> */}
            </div>
            <SectionPane className="text-center">
                <button
                    className="h-10 px-3 m-4 font-medium text-white bg-black rounded-md"
                    id="gpa"
                    onClick={switchHandler}
                >
                    GPA
                </button>
                <button
                    className="h-10 px-3 m-4 font-medium text-white bg-black rounded-md"
                    id="cgpa"
                    onClick={switchHandler}
                >
                    CGPA
                </button>
            </SectionPane>
        </Container>
    );
};

export default Home;
