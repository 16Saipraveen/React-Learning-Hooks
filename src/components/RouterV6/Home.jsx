import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <h3>Home Route</h3>
      <p>This is the home page of the app using React Router</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={(() => navigate('/filter'))}>Go to Filter</button>
    </>
  );
};

export default Home;
