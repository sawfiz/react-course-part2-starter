import {
  keepPreviousData,
  useInfiniteQuery
} from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PageQuery {
  pageSize: number;
}

const usePosts = (query: PageQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query], // Refetch when query changes
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    staleTime: 10 * 1000, // 10 seconds
    placeholderData: keepPreviousData, // Better UX
  });

export default usePosts;
