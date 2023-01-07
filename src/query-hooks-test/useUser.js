import axios from "axios";
import { response } from "msw";
import { useQuery } from "react-query";

const fetchUser = (userId) => axios.get(
  `https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data
);

export default function useUser(userId) {
  return useQuery(['users', userId], () => fetchUser(userId));
}