import React from "react";
import { useSelector } from "react-redux";
import Table from "./Table";

const Bookmarked = () => {
  const { BookmarkedUser } = useSelector((store) => store.users);

  return (
    <div>
      <Table data={BookmarkedUser} key="Bookmarked" />
    </div>
  );
};

export default Bookmarked;
