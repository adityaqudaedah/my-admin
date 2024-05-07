"use client";
import React, { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance";
import DataTable, { TableColumn } from "react-data-table-component";
import User from "@/types/user";
import { useRouter, useSearchParams } from "next/navigation";

const columns: TableColumn<User>[] = [
  {
    name: "No",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Username",
    selector: (row) => row.name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "City",
    selector: (row) => row.address.city,
  },
  {
    name: "Username",
    selector: (row) => row.name,
  },
  {
    name: "Website",
    selector: (row) => row.website,
  },
  {
    name: "Company",
    selector: (row) => row.company.name,
  },
];

const Users = () => {
  const [userList, setUserList] = useState([]);

  const router = useRouter();

  const rowClickHandler = (rowData: User) => {
    router.push(`/users/${rowData.id}`,{});
  };

  const getAllUsers = async () => {
    try {
      const res = await axios.get("/users");

      if (res.status === 200) {
        setUserList(res.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    let mount = true;

    if (mount) {
      getAllUsers();
    }

    return () => {
      mount = false;
    };
  }, []);

  return (
    <main>
      <p className="text-2xl font-semibold">List User</p>
      <br/>
      {/* user-list */}
      <section>
        <DataTable
          columns={columns}
          data={userList}
          onRowClicked={(row) => rowClickHandler(row)}
          pointerOnHover
        />
      </section>
    </main>
  );
};

export default Users;
