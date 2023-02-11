import { FC } from "react";
import { Routes, Route as RouteDom } from "react-router-dom";

import { Home } from "@/pages/Home";
import { About } from "@/pages/about/About";
import { Contact } from "@/pages/contact/Contact";
import { NotFound } from "@/pages/404/404";

export const Route: FC = () => {
  return (
    <>
      <p>ss</p>
      <Routes>
        <RouteDom path="/" element={<Home />} />
        <RouteDom path="/about" element={<About />} />
        <RouteDom path="/contact" element={<Contact />} />
        <RouteDom path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
