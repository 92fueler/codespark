import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Editor from "../components/Editor";
import { listProblemDetails } from "../actions/problemActions";

const ProblemPage = ({ match }) => {
  const dispatch = useDispatch();

  const problemDetails = useSelector((state) => state.problemDetails);

  const { loading, error, problem } = problemDetails;

  useEffect(() => {
    dispatch(listProblemDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const { id, title, desc } = problem;
  return (
    <Container fluid>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col xs sm={12} md lg={5}>
            <h2>
              {id}. {title}
            </h2>
            <p style={{ lineHeight: "30px" }}>{desc}</p>
          </Col>
          <Col>
            <Editor />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProblemPage;
