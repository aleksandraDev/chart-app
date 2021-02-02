import React from "react";
import { Spin, Space } from "antd";

const styles = {
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
};

const Loader = () => (
  <Space size="middle" style={styles}>
    <Spin size="large" />
  </Space>
);

export default Loader;
