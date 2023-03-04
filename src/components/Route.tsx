import { FC, useEffect, useContext } from "react";
import { Routes, Route as RouteDom, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/authContext";

import { Home } from "@/pages/Home";
import { About } from "@/pages/about/About";
import { Contact } from "@/pages/contact/Contact";
import { Form } from "@/pages/form/Form";
import { Login } from "@/pages/login";
import { Test } from "@/pages/test";
import { NotFound } from "@/pages/404/404";

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
        <RouteDom path="/" element={<Home />} />
        <RouteDom path="/about" element={<About />} />
        <RouteDom path="/contact" element={<Contact />} />
        <RouteDom path="/form" element={<Form />} />
        <RouteDom path="/login" element={<Login />} />
        <RouteDom path="/test" element={<Test />} />
        <RouteDom path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
