import axios from "axios";

const API = {
  searchBooks: async book => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
  },
  getBooks: async () => {
    return axios.get("/api/books");
  },
  getBook: async id => {
    return axios.get(`/api/books/${id}`);
  },
  deleteBook: async id => {
    return axios.delete(`/api/books/${id}`);
  },
  saveBook: async bookData => {
    return axios.post("/api/books", bookData);
  }
};

export default API;
