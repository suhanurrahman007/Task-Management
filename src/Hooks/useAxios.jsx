import axios from "axios";

export const instance = axios.create({
  baseURL: "https://job-task-server-eta.vercel.app",
});
const useAxios = () => {
    return instance;
};

export default useAxios;