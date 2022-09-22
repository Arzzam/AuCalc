import React from "react";
import { useNavigate } from "react-router-dom";
import Container, { Head1 } from "../Components/Container/Container";
// import { HomeButton } from "../Components/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  const switchHandler = (e) => {
    navigate(`/${e.target.id}`, { replace: true });
  };

  return (
    <Container>
      <div className=" flex-1 justify-self-center text-center">
        <Head1>AuCalc</Head1>
        <h2 className="font-lora p-2 font-normal text-xl">GPA and CGPA Calculator</h2>
        <p className="justify-center p-2 font-rki text-lg">
          AuCalc is used to calculate Grade Point Average (GPA) and Cumulative
          Grade Point Average (CGPA) scores
          <br /> 
          for students studying at all colleges under Anna university.
          <br />
          Aucalc, an online platform, is an efficient and versatile tool to
          measure student performance.
          <br />
          AuCalc can calculate their scores for every department's students
          easily and quickly.
        </p>
      </div>
      <div className=" flex-1 justify-self-center text-center">
        <button
          className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
          id="gpa"
          onClick={switchHandler}
        >
          GPA
        </button>
        <button
          className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
          id="cgpa"
          onClick={switchHandler}
        >
          CGPA
        </button>
      </div>
    </Container>
  );
};

export default Home;
