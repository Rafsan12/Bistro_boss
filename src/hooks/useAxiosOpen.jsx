import axios from "axios";

const axiosOpen = axios.create({
  baseURL: "http://localhost:5000",
});

export default function useAxiosOpen() {
  return axiosOpen;
}
