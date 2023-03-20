import React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export const HomeButton = (props) => {
    return (
        <ButtonUnstyled className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white">
            {props.children}
        </ButtonUnstyled>
    );
};

export const GpaButton = (props) => {
    return <ButtonUnstyled className="h-10 px-3 m-4 font-medium rounded-md bg-black text-white">{props.children}</ButtonUnstyled>;
};
