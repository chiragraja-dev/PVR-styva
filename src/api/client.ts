import axios from "axios";

export const client = axios.create({
  baseURL: "https://pvrdataapi.azurewebsites.net/api",
});

export const clientV2 = axios.create({
  baseURL: "https://pvr-dal-movieanalytics.azurewebsites.net/api/v1"
})

