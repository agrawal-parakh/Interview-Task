import React, { useEffect } from "react";
import { fetchUsers } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";

const Users = () => {
  const dispatch = useDispatch();

  const { Users } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <Table data={Users} key="Users" />
    </div>
  );
};

export default Users;
