import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const UseMenu = () => {
  const axiosOpen = useAxiosOpen();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axiosOpen.get("/menu");
      const result = response.data;
      return result;
    },
  });
  return [menu, loading, refetch];
};

export { UseMenu };
