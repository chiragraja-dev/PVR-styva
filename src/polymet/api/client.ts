import axios from "axios";

export const client = axios.create({
  baseURL: "https://pvrdatapoints.azurewebsites.net/api/",
});
