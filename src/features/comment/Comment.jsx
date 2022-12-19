import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./commentSlice";

export default function Comment({postId}) {
  const [content, setContent] = useState("");
  const commentSelector = (state) => state.comment.filter((comment) => comment.postId === postId);
  const comments = useSelector(commentSelector);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        id: Date.now(),
        postId,
        content,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <button> Save Comment</button>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <ul>
      {
        comments
        // .filter((comment)=>comment.postId===postId)
        .map((item)=>(
          <li key={item.id}>{item.content}</li>
        ))
        
      }
      </ul>
    </div>
  );
}
