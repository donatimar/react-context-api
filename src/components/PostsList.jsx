import React, { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const posts = useContext(PostsContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-4 mb-3">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
