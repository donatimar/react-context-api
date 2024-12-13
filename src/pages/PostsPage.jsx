import React from "react";
import PostsList from "../components/PostsList";

export default function PostsPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-5">Lista dei post</h1>
      <PostsList />
    </div>
  );
}
