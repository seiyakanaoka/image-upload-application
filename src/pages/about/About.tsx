import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const About: FC = () => {
  const navigate = useNavigate();

  const handleRouterHome = () => {
    navigate("/");
  };

  return (
    <>
      <h2>About</h2>
      <button onClick={handleRouterHome}>Home</button>
    </>
  );
};
