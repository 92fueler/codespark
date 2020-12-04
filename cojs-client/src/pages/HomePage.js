import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Problem from "../components/Problem";
import { listProblems } from "../actions/problemActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const problemList = useSelector((state) => state.problemList);
  const { loading, error, problems } = problemList;

  useEffect(() => {
    dispatch(listProblems());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h2>loading ... </h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
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
      )}
    </div>
  );
};

export default HomePage;
