import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Editor from "../components/Editor";

const ProblemPage = ({ match }) => {
  const [problem, setProblem] = useState({});
  useEffect(() => {
    const fetchProblem = async () => {
      const { data } = await axios.get(`/api/v1/problems/${match.params.id}`);
      setProblem(data);
    };
    fetchProblem();
  }, [match.params.id]);

  const { id, title, desc } = problem;
  return (
    <Container fluid>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
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
    </Container>
  );
};

export default ProblemPage;
