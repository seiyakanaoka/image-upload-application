import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Home: FC = () => {
  const navigate = useNavigate();

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
