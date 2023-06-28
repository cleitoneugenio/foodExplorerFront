import axios from "axios";

export const api = axios.create({

  baseURL: "https://foodexplorerback.onrender.com"

});