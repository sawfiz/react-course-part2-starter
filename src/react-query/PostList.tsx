import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const pageSize = 5;
  const { data, error, fetchNextPage, isFetchingNextPage } = usePosts({
    pageSize,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div className="my-3">
        <button
          disabled={isFetchingNextPage}
          className="btn btn-primary ms-3"
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default PostList;
