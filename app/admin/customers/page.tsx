"use client";
import { fireDb } from "@/lib/firestore/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const customers = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(fireDb, "users"));
      setUsers(snapshot.docs.map((doc) => doc.data()));
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="font-[600] text-xl mb-5">Total Users: {users.length}</h1>
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default customers;
