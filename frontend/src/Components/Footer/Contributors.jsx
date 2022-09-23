import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contributors = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <a href={props.ldLink}>
        <LinkedInIcon />
      </a>
      <a href={props.gitLink}>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default Contributors;
