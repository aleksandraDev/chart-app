import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import {
  HomeOutlined,
  AreaChartOutlined,
  DotChartOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Nav = () => (
  <Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2" icon={<AreaChartOutlined />}>
        <Link to="/difficulty">Difficulty</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<DotChartOutlined />}>
        <Link to="/hash-rate">Hash Rate</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default Nav;
