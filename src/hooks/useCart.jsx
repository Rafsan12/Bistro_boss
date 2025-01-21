import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

export default function useCart() {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user.email}`);
      return response.data;
    },
  });
  return [cart, refetch];
}
