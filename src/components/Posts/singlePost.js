import React from "react";
import "./singlePost.scss";

function SinglePost({ post }) {
  return (
    <li className="post">
      <p>
        <b>UserId:</b> {post.userId}, <b>Postid</b>: {post.id}
      </p>
      <p>
        <b>Text:</b> {post.body}
      </p>
    </li>
  );
}

export default SinglePost;
