import { useState } from "react";
import usePosts from "./hooks/usePosts";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const { posts, error, isLoading } = usePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
            <p></p>
            {post.body}
          </li>
        ))}
      </ul>
      <div className="my-3">
        <button
          disabled={page === 1}
          className="btn btn-primary"
          onClick={() => setPage(page - 1)}
        >
          Previous Page
        </button>
        <button
          className="btn btn-primary ms-3"
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default PostList;
