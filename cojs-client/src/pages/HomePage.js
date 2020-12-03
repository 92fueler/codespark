import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

import Problem from "../components/Problem";
// import problems from "../problems";

const HomePage = () => {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    const fetchProblems = async () => {
      const { data } = await axios.get("/api/v1/problems");
      setProblems(data);
    };
    fetchProblems();
  }, []);

  return (
    <div>
      <Table responsive borderless hover>
        <thead>
          <tr>
            <th>
              <strong>#</strong>
            </th>
            <th>
              <strong>Title</strong>
            </th>
            <th>
              <strong>Difficulty</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <Problem key={problem.id} problem={problem} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomePage;
