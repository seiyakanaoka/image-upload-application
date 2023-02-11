import { FC } from "react";
import { Routes, Route as RouteDom } from "react-router-dom";

import { Home } from "@/pages/Home";
import { About } from "@/pages/about/About";
import { Contact } from "@/pages/contact/Contact";
import { Form } from "@/pages/form/Form";
import { NotFound } from "@/pages/404/404";

export const Route: FC = () => {
  return (
    <>
      <h1>TOP</h1>
      <Routes>
        <RouteDom path="/" element={<Home />} />
        <RouteDom path="/about" element={<About />} />
        <RouteDom path="/contact" element={<Contact />} />
        <RouteDom path="/form" element={<Form />} />
        <RouteDom path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
