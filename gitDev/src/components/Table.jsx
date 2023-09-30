import { Button, Col, FormGroup, Input, InputGroup, Row } from "reactstrap";
import React, { useMemo, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Bookmark from "../assets/bookmark.png";
import Bookmarked from "../assets/bookmarked.png";
import { useDispatch, useSelector } from "react-redux";
import { setBookmarkedUser, setUnBookmarked } from "../features/userSlice";
import { throttle } from "../utils/helper";

const Table = (props) => {
  const { data } = props;
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilterData] = useState(data);

  const dispatch = useDispatch();
  const { BookmarkedUser } = useSelector((store) => store.users);

  const searchFun = (value, udata) => {
    const users = udata.filter((user) => user.login.includes(value));
    setFilterData(users);
  };

  const betterSearch = useMemo(() => throttle(searchFun, 300), []);

  const onHandler = (e) => {
    setFilterText(e.target.value);
    betterSearch(filterText, data);
  };

  useEffect(() => {
    setFilterData(data);
  }, []);

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setFilterText("");
      }
    };

    return (
      <>
        <Row>
          <Col md={12}>
            <FormGroup>
              <InputGroup>
                <Input
                  placeholder="Search..."
                  onChange={onHandler}
                  value={filterText}
                />
                <Button onClick={handleClear}>Clear</Button>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  });

  const columns = [
    {
      name: "Profile",
      selector: (row) => (
        <img
          src={row.avatar_url}
          width={"30px"}
          alt={`${row.avatar_url} profile`}
        />
      ),
      width: "300px",
    },
    {
      name: "Username",
      selector: (row) => row.login,
      width: "500px",
    },
    {
      name: "Bookmark",
      selector: (row) => {
        const isBookmarked = BookmarkedUser.some((user) => user.id === row.id);

        return isBookmarked ? (
          <Button color="">
            <img
              src={Bookmarked}
              width="18px"
              alt="bookmark"
              onClick={() => dispatch(setUnBookmarked(row.id))}
            />
          </Button>
        ) : (
          <Button color="">
            <img
              src={Bookmark}
              width="18px"
              alt="bookmarked"
              onClick={() => dispatch(setBookmarkedUser(row))}
            />
          </Button>
        );
      },
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={filterText ? filteredData : props.data}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
};

export default Table;
