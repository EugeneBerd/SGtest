import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePost from "./singlePost";
import "./singlePost.scss";

function PostList({ posts }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (posts.length === 0) {
      axios(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
        setData(res.data.slice(0, 10));
      });
    } else setData(posts);
  }, [posts]);
  const postList = data.map((x) => <SinglePost post={x} key={x.id} />);
  return <ol className="post-container">{postList}</ol>;
}

export default PostList;
