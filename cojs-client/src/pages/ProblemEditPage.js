import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProblemDetails, updateProblem } from "../actions/problemActions";
import { PROBLEM_UPDATE_RESET } from "../constants/problemConstants";

const ProblemEditPage = ({ match, history }) => {
  const problemId = match.params.id;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const dispatch = useDispatch();

  const problemDetails = useSelector((state) => state.problemDetails);
  const { loading, error, problem } = problemDetails;

  const problemUpdate = useSelector((state) => state.problemUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = problemUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROBLEM_UPDATE_RESET });
      history.push("/admin/pv1/roblemlist");
    } else {
      if (!problem.name || problem.id !== problemId) {
        dispatch(listProblemDetails(problemId));
      } else {
        setTitle(problem.title);
        setDesc(problem.desc);
        setDifficulty(problem.difficulty);
      }
    }
  }, [dispatch, history, problemId, problem, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProblem({
        id: problemId,
        title,
        desc,
        difficulty,
      })
    );
  };

  return (
    <>
      <Link to="/admin/v1/problemlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Problem</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter problem title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="desc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="desc"
                as="textarea"
                placeholder="Enter problem description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="difficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                type="text"
                as="select"
                placeholder="Enter problem difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
                <option>super</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit" variant="secondary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProblemEditPage;
