import React, { useEffect, useState } from "react";
import { GpaButton } from "../Components/Button/Button";
import Container, { Head1 } from "../Components/Container/Container";
import axios from "axios";

const Gpa = () => {
  const [getReg, setGetReg] = useState([]);
  // const [getDep, setGetDep] = useState([]);
  // const [getSem, setGetSem] = useState([]);

  // const changeHandlerDep = () => {
  //   setGetDep(getDep);
  // };

  // const changeHandlerReg = () => {
  //   setGetReg(getReg);
  // };
  const reg = () => {
    var config = {
      method: "get",
      url: "api/regulations/",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setGetReg(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    reg();
  });

  return (
    <Container>
      <div className=" flex-1 justify-self-center text-center">
        <Head1>GPA</Head1>
        <h4>Select Regulation</h4>
      </div>
      <div className=" flex-1 justify-self-center text-center">
        {console.log(getReg)}
        {getReg.map(({ id, data }) => {
          console.log(data);
          return (
            <button
              className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
              key={id}
            >
              {data}
            </button>
          );
        })}
      </div>
    </Container>
  );
};

export default Gpa;
