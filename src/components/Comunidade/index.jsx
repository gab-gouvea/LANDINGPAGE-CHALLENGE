import { CardComu } from "../CardComu";
import "./index.css";

export function Comunidade() {
  return (
    <>
      <div className="overlay"></div>
      <div className="backgroundComu">
        <h1>Nossa Comunidade</h1>
        <section className="cardsComu">
          <CardComu
            nome="Entusiastas"
            conteudo="Comunidade de fãs da Fórmula E, aqueles que compartilham sua paixão, debatem e se conectam atraves do automobilismo elétrico."
          />
          <CardComu
            nome="Ambientalistas"
            conteudo="Aqueles também envolvidos e ativos em causas ambientais, e preocupados no futuro do mundo e nas mudanças climáticas"
          />
          <CardComu
            nome="Competidores"
            conteudo="Interessados em demonstrar seu conhecimento e habilidade nas competiçoes propostas. Atráves de escalaçoes e palpites esportivos."
          />
        </section>
      </div>
    </>
  );
}
