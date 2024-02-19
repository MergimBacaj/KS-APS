import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  body: string;
  title: string;
  id: number;
  reactions: number;
  tags: String[];
  userId: number;
}
interface ResponseData {
  posts: Post[];
}

const useGetPost = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);
  const [post, setPost] = useState<Post | undefined>(undefined);

  const fetchUsersPost = async () => {
    try {
      const response = await axios.get<ResponseData>(
        `https://dummyjson.com/posts`
      );
      setPost(response.data.posts.find((post) => post.userId === id));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersPost();
  }, [id]);

  return { loading, error, post };
};

export default useGetPost;
