import axios from "axios";
import { getToken } from "./TokenService";

function ErrorHandler(error) {
  if (error.message.startsWith("timeout")) {
    console.log("Timeout Error");
  }
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.log("Bad Request");
        break;
      case 401:
        console.log("Unauthorized");
        break;
      case 403:
        console.log("Forbidden");
        break;
      case 404:
        console.log("NotFound");
        break;
      case 422:
        console.log("Unprocessable Entity");
        break;
      case 500:
        console.log("Internal Server Error");
        break;
      default:
        break;
    }
  }
}

const ApiService = {
  request(method, url, params, data) {
    const config = {
      baseURL: "http://localhost:3000",
      timeout: 120000,
      url: url,
      method: method,
    };
    // if (getToken) {
    //   config.headers = {
    //     Authorization: "Bearer " + getToken,
    //   };
    // }
    if (data) config.data = data;

    if (params) config.params = params;

    const result = axios(config);

    return new Promise((resolve, reject) => {
      result
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          ErrorHandler(error);
          reject(error);
        });
    });
  },
  get(url, params) {
    return this.request("GET", url, params, undefined);
  },
  post(url, data, params) {
    return this.request("POST", url, params, data);
  },
  patch(url, data, params) {
    return this.request("PATCH", url, params, data);
  },
  put(url, data, params) {
    return this.request("PUT", url, params, data);
  },
  remove(url, params) {
    return this.request("DELETE", url, params, undefined);
  },
};

export default ApiService;
