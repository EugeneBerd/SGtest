import axios from "axios";
import React, { useRef, useState } from "react";
import { Navigate } from "react-router";
import PostList from "./PostList";

function Posts() {
  const isLoggedIn = window.localStorage.getItem("user");
  const inputRef = useRef();
  const [postlist, setPostlist] = useState([]);
  const [inputError, setInputError] = useState(false);

  const handleChange = () => {
    let inputCheck = inputRef.current.value;
    if (inputCheck < 0 || inputCheck > 10) {
      setInputError(true);
    } else setInputError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/?userId=${inputRef.current.value}`
      )
      .then((res) => {
        setPostlist(res.data);
      });
  };

  if (isLoggedIn) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            data-testid="passTest"
            type="number"
            placeholder="user id"
            ref={inputRef}
          />
          {!inputError && <button>find posts</button>}
          {inputError && <span> the allowed range is 1 to 10</span>}
        </form>
        <PostList posts={postlist} />
      </div>
    );
  } else return <Navigate to="/login" />;
}

export default Posts;
