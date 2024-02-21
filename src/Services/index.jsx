import axios, { Axios } from "axios";

const api = axios.create({
  baseURL:'https://api.themoviedb.org/3'
})