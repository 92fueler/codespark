import React from "react";
import { Table } from "react-bootstrap";
import Problem from "../components/Problem";
import problems from "../problems";

const HomePage = () => {
  return (
    <div>
      <Table borderless hover>
        <thread>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
          <tbody>
            {problems.map((problem) => (
              <Problem key={problem.id} problem={problem} />
            ))}
          </tbody>
        </thread>
      </Table>
    </div>
  );
};

export default HomePage;
