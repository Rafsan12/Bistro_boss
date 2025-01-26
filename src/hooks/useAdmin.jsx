import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

export default function useAdmin() {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const response = await axiosSecure.get(`users/admin/${user.email}`);
      const result = response.data?.isAdmin;
      return result;
    },
  });
  return [isAdmin, isAdminLoading];
}
