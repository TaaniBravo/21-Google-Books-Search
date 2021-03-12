import axios from "axios";

const API = {
  async searchBooks(book) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
  },
  async getBooks() {
    return axios.get("/api/books");
  },
  async getBook(id) {
    return axios.get(`/api/books/${id}`);
  },
  async deleteBook(id) {
    return axios.delete(`/api/books/${id}`);
  },
  async saveBook(bookData) {
    return axios.post("/api/books", bookData);
  }
};

export default API;
