import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import Comment from "../comment/Comment";

export default function Post() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
// newPost là action, addPost là action creator,{
//   id: Date.now(),
    //   title,
    //   body
    // } là payload, data
    const newPost = addPost({
      id: Date.now(),
      title,
      body
    });
    dispatch(newPost);
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>Post Titile </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Post Body</label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {post.map((item) => (
       <div key={item.id}>
        <h1>{item.title}</h1>
        <h1>{item.body}</h1>
        <Comment postId={item.id} />
       </div>
      ))}
    </div>
  );
}
