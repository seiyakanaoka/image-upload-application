import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Contact: FC = () => {
  const navigate = useNavigate();

  const handleRouterHome = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Contact</h2>
      <button onClick={handleRouterHome}>Home</button>
    </>
  );
};
