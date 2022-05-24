import axios from "axios";

export const getPostsRequest = () => axios.get("/posts");
export const createPostRequest = (id) => axios.delete(`/posts/${id}`);

export const deletePostRequest = (id) => axios.delete(`/posts/${id}`);
export const getPostRequest = (id) => axios.get(`/posts/${id}`);
export const updatePostRequest = (id, newfiles) => axios.put(`/posts/${id}`, newfiles);
