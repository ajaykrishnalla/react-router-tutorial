import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    // history.push("/contact");
    history.push({
      pathname: "/contact",
      state: { name: "sai krishna " }
    });
  };
  return (
    <>
      <h1>Home Component</h1>
      <button onClick={handleClick}>Go to Contact</button>
    </>
  );
};
