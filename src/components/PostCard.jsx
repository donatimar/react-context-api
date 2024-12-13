import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="card h-100">
      <img src={post.image} className="card-img-top" alt="Post image" />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <ul className="list-inline">
          {post.category.map((tag, index) => (
            <li key={index} className="list-inline-item badge bg-secondary">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
