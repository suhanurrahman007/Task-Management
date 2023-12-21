import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useTask = () => {
  const axios = useAxios();

  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/tasks");
      return res.data;
    },
  });

  return [tasks, isLoading, refetch];
};

export default useTask;
