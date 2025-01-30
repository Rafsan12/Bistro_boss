import axios from "axios";

const axiosOpen = axios.create({
  baseURL: "https://bistro-boss-restaurant-server-inky.vercel.app",
});

export default function useAxiosOpen() {
  return axiosOpen;
}
