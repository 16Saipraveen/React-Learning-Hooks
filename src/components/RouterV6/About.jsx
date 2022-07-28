import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h3>About Route</h3>
      <p>This is the about page of the app using React Router</p>
      <Link to='/'>Go to Home</Link>
      <li><Link to="/users/anil">Anil</Link></li>
      <li><Link to="users/peter">Peter</Link></li>
    </>
  );
};

export default About;
