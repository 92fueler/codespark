import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Problem from "../components/Problem";
import { listProblems } from "../actions/problemActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";

const HomePage = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const problemList = useSelector((state) => state.problemList);
  const { loading, error, problems, page, pages } = problemList;

  useEffect(() => {
    dispatch(listProblems(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
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
          <Paginate pages={pages} page={page} />
        </Table>
      )}
    </div>
  );
};

export default HomePage;
