import Logo from "../../assets/logo.svg"
import { Button } from "../Button"
import "./index.css"

export function Header() {
    return (
        <header>
          <img src={Logo} alt="Logo E-pit" />
          <nav>
            <ul className="ul-header">
              <li><Button href="/" cor="transparent" nome="Home"/></li>
              <li><Button href="/mais" cor="transparent" nome="Saber mais"/></li>
              <li><Button nome="Login" href="https://mahindra-challenge-2024.vercel.app"/></li>
            </ul>
          </nav>
        </header>
    )
}