import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import Paginate from "../components/Paginate";
import {
  listProblems,
  deleteProblem,
  createProblem,
} from "../actions/problemActions";
import { PROBLEM_CREATE_RESET } from "../constants/problemConstants";

const ProblemListPage = ({ history, match }) => {
  // const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const problemList = useSelector((state) => state.problemList);
  // const { loading, error, problems, page, pages } = problemList;
  const { loading, error, problems } = problemList;

  const problemDelete = useSelector((state) => state.problemDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = problemDelete;

  const problemCreate = useSelector((state) => state.problemCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    problem: createdProblem,
  } = problemCreate;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    dispatch({ type: PROBLEM_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/signin");
    }

    if (successCreate) {
      history.push(`/admin/problem/${createdProblem.id}/edit`);
    } else {
      dispatch(listProblems());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProblem,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProblem(id));
    }
  };

  const createProblemHandler = () => {
    dispatch(createProblem());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Problems</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProblemHandler}>
            <i className="fas fa-plus mr-1"></i> Create Problem
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive size="xl">
            <thead>
              <tr>
                <th>
                  <strong>ID</strong>
                </th>
                <th>
                  <strong>TITLE</strong>
                </th>
                <th>
                  <strong>DESCRIPTION</strong>
                </th>
                <th>
                  <strong>DIFFICULTY</strong>
                </th>
                <th>
                  <strong>EDIT / DELETE</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem) => (
                <tr key={problem.id}>
                  <td>{problem.id}.</td>
                  <td>{problem.title}</td>
                  <td style={{ width: "600px" }}>{problem.desc}</td>
                  <td>{problem.difficulty}</td>
                  <td style={{ width: "140px" }}>
                    <LinkContainer to={`/admin/problem/${problem.id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm ml-4"
                      onClick={() => deleteHandler(problem.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </>
      )}
    </>
  );
};

export default ProblemListPage;
