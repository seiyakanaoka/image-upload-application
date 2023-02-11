import { FC, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form: FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");

  const [price, setPrice] = useState<string>("");

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangePrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrice(e.currentTarget.value);
  };

  const handleSubmit = () => {
    handleRouterHome();
  };

  const handleRouterHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <p>タイトル</p>
        <input value={title} onChange={handleChangeTitle} />
      </div>
      <div>
        <p>料金</p>
        <input value={price} onChange={handleChangePrice} />
      </div>
      <br />
      <div>
        <button type="button" onClick={handleSubmit}>
          送信
        </button>
      </div>
      <br />
      <div>
        <button type="button" onClick={handleRouterHome}>
          戻る
        </button>
      </div>
    </div>
  );
};
