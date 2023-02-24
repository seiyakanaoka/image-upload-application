import { FC, ChangeEventHandler, useState } from "react";

export const Login: FC = () => {
  const [userName, setUserName] = useState<string | undefined>();

  const [passWord, setPassWord] = useState<string | undefined>();

  const handleChangeUserName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassWord(e.currentTarget.value);
  };

  return (
    <form>
      <h1>Login</h1>
      <label>
        ユーザー名
        <input value={userName} onChange={handleChangeUserName} />
      </label>
      <label>
        パスワード
        <input value={passWord} onChange={handleChangePassword} />
      </label>
      <button>login</button>
    </form>
  );
};
