import axios from "axios";

export const client = axios.create({
  baseURL: "https://pvrapi.azurewebsites.net/api",
});
