import React, { createContext } from "react";

// Array dei post
const posts = [
  {
    id: 1,
    title: "Il mio primo post",
    content: "Questo è il content del primo post",
    image: "",
    category: ["tag1"],
  },
  {
    id: 2,
    title: "Il mio secondo post",
    content: "Questo è il content del secondo post",
    image: "",
    category: ["tag2"],
  },
  {
    id: 3,
    title: "Il mio terzo post",
    content: "Questo è il content del terzo post",
    image: "",
    category: ["tag3"],
  },
];

// Creazione del context
const PostsContext = createContext();

// Provider del context
const PostsProvider = ({ children }) => {
  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};

export { PostsProvider, PostsContext };
