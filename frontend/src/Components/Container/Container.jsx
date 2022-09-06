import React from "react";

const Container = (props) => {
  return (
    <div className="lg:container mx-auto px-6 py-6 ">{props.children}</div>
  );
};

export default Container;

export const Head1 = (props) => {
  return <h1 className="text-4xl text-center font-lora">{props.children}</h1>;
};
