import { createContext, useContext, useEffect, useState } from "react";
import {
  getPostsRequest,
  deletePostRequest,
  createPostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/pots";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

// eslint-disable-next-line react/prop-types
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getPostsRequest();
      setPosts(res.data);
    })();
  }, []);

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line consistent-return
  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      // eslint-disable-next-line no-shadow
      setPosts(posts.map((post) => (post.id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <postContext.Provider value={{ posts, deletePost, createPost, getPost, updatePost }}>
      {children}
    </postContext.Provider>
  );
};
