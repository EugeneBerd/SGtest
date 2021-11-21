import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div>
      <p>Error 404</p>
      <Link className="error-link" to="/">
        <button>go back to Home Page</button>
      </Link>
    </div>
  );
}

export default Error;
