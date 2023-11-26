import { toast } from "react-toastify";
import axios from "axios";

const defaultClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

defaultClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      toast.error(error.response.data.message);
    } else toast.error("Something went wrong");
    throw error;
  },
);

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      toast.error(error.response.data.message);
    } else toast.error("Something went wrong");
    throw error;
  },
);

export { defaultClient };
export default axiosClient;
