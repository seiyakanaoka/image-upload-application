import { FC, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getProducts } from "@/actions/productAction";

export const Home: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts("/api/product");
      console.log("data: ", data);
    };
    fetch();
  }, []);

  return (
    <>
      <h2>Home</h2>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/"
          >
            Hone
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/form"
          >
            Form
          </NavLink>
        </li>
      </ul>
    </>
  );
};
