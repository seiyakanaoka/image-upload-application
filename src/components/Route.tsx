import { FC, useEffect, useContext } from "react";
import { Routes, Route as RouteDom, useNavigate } from "react-router-dom";

import { AuthContext } from "@/context/authContext";
import { NotFound } from "@/pages/error/404/404";
import { Login } from "@/pages/login";

export const Route: FC = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  // sessionがない場合、login画面に遷移させる
  useEffect(() => {
    if (authContext == undefined) {
      navigate("/login");
    }
  }, [authContext]);

  return (
    <>
      <h1>TOP</h1>
      <Routes>
        <RouteDom path="/login" element={<Login />} />
        <RouteDom path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
