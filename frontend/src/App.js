import React from "react";

// import { useState } from "react";
import "./App.css";
// import axios from "axios";
import Header from "./Components/Header/Header";

function App() {
  // const [data, setData] = useState({});

  // function fetchData(event) {
  //   axios
  //     .get("/api/degrees")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   event.preventDefault();
  // }

  return (
    <React.Fragment>
      <Header />
      {/* <p>{JSON.stringify(data)}</p>
      <button onClick={fetchData}>Get Data</button> */}
    </React.Fragment>
  );
}

export default App;
