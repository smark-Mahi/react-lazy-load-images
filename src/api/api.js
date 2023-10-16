import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://simple-social.onrender.com",
  withCredentials: true,
});

export async function getPostApi() {
  const data = await axiosClient.get("/posts");
  return data;
}
