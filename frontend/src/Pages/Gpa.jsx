import React, { useEffect, useState } from "react";
import { GpaButton } from "../Components/Button/Button";
import Container, { Head1 } from "../Components/Container/Container";
import axios from "axios";

function Gpa() {
  const [regulations, setRegulations] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  function getRegulations() {
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

  return (
    <Container>
      <div className=" flex-1 justify-self-center text-center">
        <Head1>GPA</Head1>
        <h4>Select Regulation</h4>
      </div>
      <div className=" flex-1 justify-self-center text-center">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {regulations && regulations.map(({ id, data }) => {
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
