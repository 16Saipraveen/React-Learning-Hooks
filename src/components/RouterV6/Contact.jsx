import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Company = () => {
  return <h4>Company page</h4>;
};

export const Channel = () => {
  return <h4>Channel page</h4>;
};

export const OtherContacts = () => {
  return <h4>Other Contacts page</h4>;
};

const Contact = () => {
  return (
    <>
      <h3>Contact us Page</h3>
      <h4>Here we implement nested routing</h4>
      <Link to="company">Company</Link>
      <Link to="channel">Channel</Link>
      <Link to="others">Others</Link>
      <Outlet />
    </>
  );
};

export default Contact;
