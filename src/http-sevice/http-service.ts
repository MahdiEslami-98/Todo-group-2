import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/data",
  headers: {
    "Content-Type": "application/json",
  },
});

type GetDataType = (url: string, options?: AxiosRequestConfig<T>) => Promise<T>;
const baseApi: GetDataType = (url, option) => {
  return axiosInstance(url, { ...option });
};

const readData = () => {
  return baseApi("");
};

const createData = (second) => {
  third;
};

const updateData = (second) => {
  third;
};

const removeData = (second) => {
  third;
};
