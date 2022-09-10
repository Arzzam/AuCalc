import React, { useState, useEffect } from "react";
import axios from "axios";

export const Regulation = (props) => {
  const [regulations, setRegulations] = useState();
  const [displayReg, setDisplayReg] = useState(true);

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
        props.setError(error);
      })
      .finally(() => {
        props.setLoading(false);
      });
  };

  useEffect(() => {
    getRegulations();
  }, []);

  return (
    <div>
      {regulations &&
        displayReg &&
        regulations.map((regulationData) => {
          return (
            <button
              className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white"
              key={regulationData.id}
              id={regulationData.id}
              onClick={props.getDegree}
            >
              {regulationData.data}
            </button>
          );
        })}
    </div>
  );
};
