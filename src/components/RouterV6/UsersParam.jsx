import React from "react";
import { useParams } from "react-router-dom";

const UsersParam = () => {
  const params = useParams();
  const { name } = params;
  return <h3>UsersParam this is {name} page</h3>;
};

export default UsersParam;
