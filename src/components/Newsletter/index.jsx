import { Button } from "../Button";
import { Header } from "../Header";
import "./index.css";

export function Newsletter() {
  return (
    <>
      <div className="new">
        <section className="form">
          <h1>Newsletter</h1>
          <p>
            você ficará por dentro de tudo o que acontece no emocionante mundo
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
              <input autocomplete="off" type="email" id="email" name="email" />
            </div>
            <button id="btn">
              <Button
                nome="INSCREVA-SE"
                cor="#FAFAFA"
                corTexto="#5271ff"
                border="none"
              />
            </button>
          </form>
        </section>
        <div class="points-section">
          <div class="pilots-wrap">
            <div class="pilots-container" id="pilot-container-1"></div>
            <div class="pilots-container" id="pilot-container-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
