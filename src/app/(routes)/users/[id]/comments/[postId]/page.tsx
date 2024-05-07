"use client"
import PostComment from "@/types/comment";
import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import axios from "@/lib/axiosInstance";

const PostComments: React.FC<{ params: { postId: string } }> = ({ params }) => {
  const [commentList, setCommentList] = useState([])
  const {postId} = params
  const getAllCommentsByPostId = async (postId:string) => {
    try {
      const res = await axios.get(`/comments?postId=${postId}`);

      if (res.status === 200) {
        setCommentList(res.data);
      }
    } catch (error) {
      alert(error)
    }
  };
  const columns: TableColumn<PostComment>[] = [
    {
      name: "No",
      selector: (row) => row.id,
    },
    {
      name: "Post Id",
      selector: (row) => row.postId,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Content",
      selector: (row) => row.body,
      wrap : true,
    },
  ];

  useEffect(() => {
    let mount = true;

    if (mount) {
      getAllCommentsByPostId(postId);
    }

    return () => {
      mount = false;
    };
  }, [postId]);

  
  return (
    <section>
      <DataTable columns={columns} data={commentList}/>
    </section>
  );
};

export default PostComments;
