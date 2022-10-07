import axios from "axios";

const API_KEY = "AIzaSyBT5YKr-GqQ_qcZXD8vBVf2wQtfWK5uH-Q";
const baseURL = "https://www.googleapis.com/youtube/v3";
const params = { part: "snippet", maxResults: 12, key: API_KEY };

export default axios.create({
  baseURL,
  params,
});
