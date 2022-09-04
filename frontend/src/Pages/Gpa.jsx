import React, { useState } from "react";
import Container from "../Components/Container/Container";

const Gpa = () => {
  const [getReg, setGetReg] = useState([]);
  const [getDep, setGetDep] = useState([]);
  // const [getSem, setGetSem] = useState([]);

  const changeHandlerDep = () => {
    setGetDep(getDep);
  };

  const changeHandlerReg = () => {
    setGetReg(getReg);
  };

  return (
    <Container>
      <h1>GPA</h1>
      <label htmlFor="reg">Regulation</label>
      <input
        type="text"
        name="reg"
        id="regulation"
        value={getReg}
        onChange={changeHandlerReg}
      />
      <label htmlFor="dep">Department</label>
      <input
        type="text"
        name="dep"
        id="department"
        value={getDep}
        onChange={changeHandlerDep}
      />
    </Container>
  );
};

export default Gpa;
