import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Components/Container/Container";
import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();
  const switchHandler = (e) => {
    navigate(`/${e.target.id}`, { replace: true });
  };

  return (
    <Container>
      <div>
        <h1>AuCalc</h1>
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
      <div>
        <Button id="Gpa" onClick={switchHandler} className="h-10 px-6 font-semibold rounded-md bg-black text-white">
          GPA
        </Button>
        <Button id="Cgpa" onClick={switchHandler}>
          CGPA
        </Button>
      </div>
    </Container>
  );
};

export default Home;
