import axios from "axios";

const API = {
  getBooks: async () => axios.get("/api/books"),
  getBook: async id => axios.get(`/api/books/${id}`),
  deleteBook: async id => axios.delete(`/api/books/${id}`),
  saveBook: async bookData => axios.post("/api/books", bookData)
};

export default API;
