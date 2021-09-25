import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.github.com/",
});

export default Api;
