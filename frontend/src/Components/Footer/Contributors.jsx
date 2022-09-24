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
        <div className="p-2">
            <ul className="flex xs:flex-row space-x-2 flex-col">
                <li>
                    <span className="text-sm font-poppins font-semibold text-gray-800 uppercase">
                        {props.name}
                    </span>
                </li>
                <li>
                    <Link href={props.ldLink}>
                        <StyledLd />
                    </Link>
                </li>
                <li>
                    <Link href={props.gitLink}>
                        <StyledGit />
                    </Link>
                </li>
            </ul>
            {/* <span className="text-sm font-semibold text-gray-800 uppercase">
                {props.name}
            </span>
            <div className="flex flex-col items-center xs:flex xs:flex-row justify-around">
                <Link href={props.ldLink}>
                    <StyledLd />
                </Link>
                <Link href={props.gitLink}>
                    <StyledGit />
                </Link>
            </div> */}
        </div>
    );
};

export default Contributors;
