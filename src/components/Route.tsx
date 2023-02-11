import { FC } from "react";

import { Home } from "@/components/pages/Home";
import { About } from "@/components/pages/About";
import { Contact } from "@/components/pages/Contact";

export const Route: FC = () => {
  return (
    <>
      <h1>Hello React Router v6</h1>
      <Home />
      <About />
      <Contact />
    </>
  );
};
