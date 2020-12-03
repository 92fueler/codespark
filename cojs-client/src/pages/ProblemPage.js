import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Editor from "../components/Editor";
import problems from "../problems";

const ProblemPage = ({ match }) => {
  const problem = problems.find(
    (problem) => problem.id === parseInt(match.params.id)
  );
  const { id, name, desc } = problem;
  return (
    <Container fluid>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col xs sm={12} md lg={5}>
          <h2>
            {id}. {name}
          </h2>
          <p style={{ lineHeight: "30px" }}>{desc}</p>
        </Col>
        <Col>
          <Editor />
        </Col>
      </Row>
    </Container>
  );
};

export default ProblemPage;
