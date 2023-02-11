import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Form: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div></div>
      <button onClick={handleBack}>戻る</button>
    </div>
  );
};
