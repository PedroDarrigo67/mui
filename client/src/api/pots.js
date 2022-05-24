import axios from "axios";

// eslint-disable-next-line no-return-await
export const getPostsRequest = async () => await axios.get("/posts");

// eslint-disable-next-line no-return-await
export const getPostRequest = async (id) => await axios.get(`/posts/${id}`);

// eslint-disable-next-line no-return-await
export const deletePostRequest = async (id) => await axios.delete(`/posts/${id}`);

export const createPostRequest = async (post) => {
  const form = new FormData();
  // eslint-disable-next-line no-restricted-syntax
  for (const key in post) {
    form.append(key, post[key]);
  }
  return await axios.post("/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  const form = new FormData();
  for (const key in newPostFields) {
    form.append(key, newPostFields[key]);
  }
  return axios.put(`/posts/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
