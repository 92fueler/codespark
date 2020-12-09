import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

const Problem = (props) => {
  const { id, title, difficulty } = props.problem;
  return (
    <tr>
      <td>{id}.</td>
      <td>
        <Link to={`/problem/${id}`}>{title}</Link>
      </td>
      <td>
        <Badge
          className="px-2 py-2 align-me"
          style={{ fontSize: 14 }}
          variant={badgeVariant(difficulty)}
        >
          {difficulty}
        </Badge>
      </td>
    </tr>
  );
};

const badgeVariant = (diff) => {
  if (diff === "easy") return "success";
  if (diff === "medium") return "primary";
  if (diff === "hard") return "warning";
  if (diff === "super") return "danger";
};

export default Problem;
