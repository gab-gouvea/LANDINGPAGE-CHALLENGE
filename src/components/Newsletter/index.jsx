import { Button } from "../Button";
import { Header } from "../Header";
import "./index.css";
import pilot1 from "../../assets/Card-Piloto-Azul.png";
import pilot2 from "../../assets/Card-Piloto.png";

export function Newsletter() {
  return (
    <>
      <div className="new">
        <section className="content-new">
          <section className="text">
            <h1>Newsletter</h1>
            <p>
              Você ficará por dentro de tudo o que acontece no emocionante mundo
              da Fórmula E, além de acompanhar de perto os resultados do nosso
              Fantasy!
            </p>
            <form>
              <div class="form-group">
                <label for="firstName">Primeiro Nome:</label>
                <input
                  autocomplete="off"
                  type="text"
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div class="form-group">
                <label for="email">Melhor Email:</label>
                <input
                  autocomplete="off"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="direita">
                <button id="btn">inscreva-se</button>
              </div>
            </form>
          </section>
          <div class="pilotos">
            <img src={pilot1} alt="Piloto 1" />
            <img src={pilot2} alt="Piloto 2" />
          </div>
        </section>
      </div>
    </>
  );
}
