import React from "react";
import apiCaller from "./apiCaller";

const call = async (type, url = "", options) => {
  try {
    const data = await apiCaller[type](url, options);
    return [data, null];
  } catch (e) {
    const message = e?.message || "Something went wrong!";
    return [null, message];
  }
};

const api = {
  get: async (url, options) => {
    return await call("get", url, options);
  },
};

export default api;
