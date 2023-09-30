import React, { useState } from "react";
import {
  TabPane,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
} from "reactstrap";
import Users from "../components/Users";
import Bookmarked from "../components/Bookmarked";

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="container mt-5">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == "1" && "active"}
            onClick={() => setActiveTab("1")}
          >
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "2" && "active"}
            onClick={() => setActiveTab("2")}
          >
            Bookmarked User
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="p-3">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Users />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Bookmarked />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Home;
