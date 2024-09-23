import { NavLink } from "react-router-dom";
import "./index.css";

export function Button({ href, cor = "#5271ff", nome, blank = "" }) {
  return (
    <NavLink
      to={href}
      className={({isActive}) => (isActive ? "button active" : "button")}
      style={{ backgroundColor: cor }}
      target={blank}
    >
      {nome}
    </NavLink>
  );
}
