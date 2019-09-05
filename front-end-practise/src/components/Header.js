import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <Link to="/students" className="header">
      Student Tracker
    </Link>
  );
};
//link back to /students
export default Header;
