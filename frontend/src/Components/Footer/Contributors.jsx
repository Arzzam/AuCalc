import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import styled from "styled-components";

const StyledGit = styled(GitHubIcon)`
  color: black !important;

  & :hover {
    color: blue !important;
  }
`;
const StyledLd = styled(LinkedInIcon)`
  color: black !important;

  & :hover {
    color: blue !important;
  }
`;

const Contributors = (props) => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">
                {props.name}
            </h2>
            <Link href={props.ldLink}>
                <StyledLd />
            </Link>
            <Link href={props.gitLink}>
                <StyledGit />
            </Link>
        </div>
    );
};

export default Contributors;
