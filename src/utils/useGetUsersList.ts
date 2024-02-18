import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./user";

interface PropType {
  page: number;
  search: string | undefined;
}
interface GetUsersResponseTypes {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}

const useGetUsersList = (props: PropType) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);
  const [users, setUsers] = useState<GetUsersResponseTypes | null>(null);

  useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users/search", {
          params: {
            skip: (props.page - 1) * 20,
            limit: 20,
            q: props.search,
          },
        });
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsersList();
  }, [props.page, props.search]);

  return { loading, error, users };
};

export default useGetUsersList;
