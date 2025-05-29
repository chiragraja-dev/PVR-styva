import axios from "axios";

export const client = axios.create({
  baseURL: "https://pvrdataapi.azurewebsites.net/api",
});

// baseURL: "https://pvrapi.azurewebsites.net/api",
