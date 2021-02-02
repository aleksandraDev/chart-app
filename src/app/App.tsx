import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";

import Routes from "./Routes";
import Nav from "../ui/components/Nav";

import "antd/dist/antd.css";
import "./App.css";

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Content>
        <Routes />
      </Content>
    </BrowserRouter>
  );
};

export default App;
