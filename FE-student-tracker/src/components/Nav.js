import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { blocks } = props;
  return (
    <div>
      <div className="nav">
        {blocks.map(block => {
          return (
            <Link to={`/blocks/${block}`} key={block} className="blocks">
              {block}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
