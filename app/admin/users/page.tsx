"use client";
import { fireDb } from "@/lib/firestore/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const users = () => {
  const [allusers, setAllUsers] = useState<any[]>([]);
  console.log(allusers);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(fireDb, "users"));
      setAllUsers(snapshot.docs.map((doc) => doc.data()));
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="font-[600] text-xl mb-5">
        Total Users: {allusers.length}
      </h1>
      <ul></ul>
      <div className="overflow-x-auto rounded-xl w-full mt-5">
        <table className="table">
          <thead>
            <tr className="bg-white">
              <th>S No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Uid</th>
              <th>Role</th>
              <th>Date</th>
            </tr>
          </thead>
          {allusers.map((user, index) => {
            return (  
              <tbody key={index}>
                <tr className="bg-white">
                  <th>{index + 1}</th>
                  <td>{user.fullName || user.email.split("@")[0]}</td>
                  <td>{user.email}</td>
                  <td>{user.uid}</td>
                  <td>
                    {user.email === "abhinav@gmail.com"
                      ? "admin"
                      : "user"}
                  </td>
                  <td>{user.date}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default users;
