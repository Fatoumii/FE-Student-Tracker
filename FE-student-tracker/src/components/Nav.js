import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { blocks } = props;
  const slugs = {
    Fundamentals: "fun",
    "Back End": "be",
    "Front End": "fe",
    "Project Phase": "proj",
    Graduated: "grad"
  };
  return (
    <div>
      <div className="nav">
        {blocks.map(block => {
          return (
            <Link to={`/blocks/${slugs[block]}`} key={block} className="blocks">
              {block}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
