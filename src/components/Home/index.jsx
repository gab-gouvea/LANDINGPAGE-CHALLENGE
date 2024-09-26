import { Button } from "../Button";
import { CardHome } from "../CardHome";
import { Header } from "../Header/index.jsx";
import "./index.css";

export function Home() {
  return (
    <>
      <div className="background">
        <Header />
        <section className="content">
          <h1>Formula E</h1>
          <p>
            Notícias e estatísticas na <br />
            palma da sua mão.
          </p>
          <Button
            href="https://mahindra-challenge-2024.vercel.app/"
            nome="VIVA ESSA EXPERIÊNCIA"
            blank="_blank"
          />
          <section className="cards-home">
            <CardHome
              nome="Estatísticas em Tempo Real"
              icon="ph ph-map-trifold"
              conteudo="Estatísticas de corrida, Dados cruciais, Tempos de volta, Líderes da corrida, Informações atualizadas e mais..."
            />
            <CardHome
              nome="Jogo Fantasy de Competição"
              icon="ph ph-game-controller"
              conteudo="Pontuação baseada no desempenho, Pilotos e equipes da Fórmula E,
              Disputa com amigos e mais..."
            />
            <CardHome
              nome="Interação com Minimapa"
              icon="ph ph-map-trifold"
              conteudo="Acompanhe ultrapassagens, Estratégias de pit stop, Detalhes da
              corrida, Experiência imersiva em tempo real e mais..."
            />
            <CardHome
              nome="Notícias e Atualizações"
              icon="ph ph-newspaper-clipping"
              conteudo="Fique por dentro das últimas notícias, Informações privilegiadas,
              Destaques da Fórmula E, Cobertura completa, Insights exclusivos e
              mais..."
            />
          </section>
        </section>
      </div>
    </>
  );
}
