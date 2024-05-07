import Post from "@/types/post";
import Link from "next/link";
import React from "react";

interface IPostCard {
  post: Post;
}

const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <span className="inline-block rounded bg-blue-600 p-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>

      <h3 className="mt-0.5 text-lg font-medium text-gray-900">{post.title}</h3>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {post.body}
      </p>

      <Link
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        href={`/users/${post.id}/comments/${post.id}`}
      >
        <span>See Comments</span>
        <span
          aria-hidden="true"
          className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
        >
          &rarr;
        </span>
      </Link>
    </article>
  );
};

export default PostCard;
