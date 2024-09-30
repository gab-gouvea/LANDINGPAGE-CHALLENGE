import { NavLink } from "react-router-dom";
import "./index.css";

export function Button({
  href = "",
  cor = "#5271ff",
  corTexto = "#FAFAFA",
  nome,
  blank = "",
  border = "0.625rem",
}) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? "button active" : "button")}
      style={{
        backgroundColor: cor,
        color: corTexto,
        borderRadius: border,
      }}
      target={blank}
    >
      {nome}
    </NavLink>
  );
}
