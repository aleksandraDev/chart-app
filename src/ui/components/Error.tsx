import React from "react";
import { Alert } from "antd";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Error = (error: any) => (
  <Alert
    style={styles}
    message="Oops! An error occured ..."
    description={error ?? "Please try again later."}
    type="error"
  />
);

export default Error;
