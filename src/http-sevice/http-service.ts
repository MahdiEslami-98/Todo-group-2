import axios, { AxiosRequestConfig } from "axios";
import { Itodo } from "@/types/todo.ts";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/data",
  headers: {
    "Content-Type": "application/json",
  },
});

type GetDataType<T> = (url: string, options?: AxiosRequestConfig) => Promise<T>;
const baseApi: GetDataType<Itodo> = (url, option) => {
  return axiosInstance(url, { ...option });
};

export const readData = async () => {
  return await baseApi("" );
};

export const createData = async (data : Itodo) => {
  return await baseApi('' , {
    method : 'POST' ,
    data
  })
};

export const updateData = async (data : Itodo , id : number) => {
  return await baseApi(`/${id}` , {
    method : 'PUT' ,
    data
  })
};

export const removeData = async (id : number) => {
 return  await baseApi(`/${id}` , {
      method : 'DELETE' ,
  })
}