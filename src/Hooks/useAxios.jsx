import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5173",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
