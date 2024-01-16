import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PageQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PageQuery) => {
  const fetchData = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
          keepPreviousData: true, // Better UX
        },
      })
      .then((res) => res.data);

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["posts", query], // Refetch when query changes
    queryFn: fetchData,
    staleTime: 10 * 1000, // 10 seconds

  });

  return { posts, error, isLoading };
};

export default usePosts;
