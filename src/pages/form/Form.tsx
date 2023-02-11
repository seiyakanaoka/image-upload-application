import { FC, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form: FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");

  const [price, setPrice] = useState<string>("");

  const [isPriceError, setIsPriceError] = useState<boolean>(false);

  const isDisabled = !title || !price || isPriceError;

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangePrice: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    const newPrice = parseInt(value);
    if (!value) {
      setPrice("");
    }
    if (isNaN(newPrice)) {
      setIsPriceError(true);
      console.log("tto");
      return;
    }
    setIsPriceError(false);
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
        {!!isPriceError && (
          <p>
            数値ではない文字列が入力されいる可能性があります。再度入力してください。
          </p>
        )}
      </div>
      <br />
      <div>
        <button type="button" onClick={handleSubmit} disabled={isDisabled}>
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
