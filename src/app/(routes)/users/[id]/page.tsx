"use client";
import React, { useState, useEffect, FC } from "react";
import axios from "@/lib/axiosInstance";
import PostCard from "@/components/ui/post-card";

const UserDetails: FC<{ params: { id: string } }> = ({ params }) => {
  const [allPost, setAllPost] = useState([]);
  const { id } = params;

  const getAllPostByUserId = async (id: string) => {
    try {
      const res = await axios.get(`/posts?userId=${id}`);

      if (res.status === 200) {
        setAllPost(res.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    let mount = true;

    if (mount) {
      getAllPostByUserId(id);
    }

    return () => {
      mount = false;
    };
  }, [id]);

  return (
    <main className="flex flex-col flex-wrap w-50 gap-2">
      {allPost.map((post, index) => (
        <div key={index}>
          <PostCard post={post} />
        </div>
      ))}
    </main>
  );
};

export default UserDetails;
