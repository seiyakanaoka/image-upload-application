import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleRouterHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Not Found</h1>
      <button onClick={handleRouterHome}>Home</button>
    </>
  );
};
