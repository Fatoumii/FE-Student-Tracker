import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { blocks } = props;
  return (
    <div className="nav">
      {blocks.map(block => {
        return (
          <Link to={`/blocks/${block}`} key={block} className="blocks">
            {block}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
