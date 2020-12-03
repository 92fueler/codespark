import React from "react";
import problems from "../problems";

const HomePage = () => {
  return (
    <>
      <h1>homepage</h1>
      {problems.map((problem) => (
        <h3>{problem.name}</h3>
      ))}
    </>
  );
};

export default HomePage;
