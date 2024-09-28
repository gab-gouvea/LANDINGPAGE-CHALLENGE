import "./index.css"
import { Button } from "../Button";

export function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <Button href="/" cor="transparent" nome="Home" corTexto="#5271ff"/>
          </li>
          <li>
            <Button href="/mais" cor="transparent" nome="Saber mais" corTexto="#5271ff" />
          </li>
          <li>
            <Button
              nome="Login"
              href="https://mahindra-challenge-2024.vercel.app"
              cor="transparent"
              corTexto="#5271ff"
            />
          </li>
        </ul>
        <span className="copy">Terms of Use - Privacy Policy</span>
        <span className="copy" id="span-copy">&copy; 2024 E-PIT</span>
      </footer>
    </>
  );
}
