import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { slugs } = props;
  return (
    <div>
      <div className="nav">
        {slugs.map(slug => {
          return (
            <Link to={`/blocks/${slug}`} key={slug} className="blocks">
              {slug}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
