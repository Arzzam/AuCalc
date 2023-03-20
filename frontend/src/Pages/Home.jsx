import React from "react";
import { useNavigate } from "react-router-dom";
import BodyContainer from "../Components/Container/BodyContainer";
import SectionPane from "../Components/SectionPane";
// import { HomeButton } from "../Components/Button/Button";

const Home = () => {
    const navigate = useNavigate();
    const switchHandler = (e) => {
        navigate(`/${e.target.id}`, { replace: true });
    };

    return (
        <BodyContainer>
            <SectionPane className="text-center">
                <button
                    className="h-10 px-3 m-4 text-white bg-black rounded-md"
                    id="gpa"
                    onClick={switchHandler}
                >
                    GPA
                </button>
                {/* <button
                    className="h-10 px-3 m-4 text-white bg-black rounded-md"
                    id="cgpa"
                    onClick={switchHandler}
                >
                    CGPA
                </button> */}
            </SectionPane>
        </BodyContainer>
    );
};

export default Home;
