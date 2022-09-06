import React from "react";
import { useNavigate } from "react-router-dom";
import Container, { Head1 } from "../Components/Container/Container";
import { HomeButton } from "../Components/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  const switchHandler = (e) => {
    navigate(`/${e.target.id}`, { replace: true });
  };

  return (
    <Container>
      <div>
        <Head1>AuCalc</Head1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
