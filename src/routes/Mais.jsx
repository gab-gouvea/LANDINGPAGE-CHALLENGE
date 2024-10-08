import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionMais } from "../components/SectionMais";


export function Mais() {
  return (
    <div className="bgMais">
      <Header />
      <main className="main-mais">
        <SectionMais
          nome="Futuro do Automobilismo"
          title="Fórmula E"
          content="Fórmula E é mais do que uma competição. É um chamado à
                consciência, um convite para imaginar um planeta onde a paixão
                pelas corridas se alia ao compromisso com o meio ambiente.
                Levando inovação e tecnologia para as pistas e arquibancadas, os
                espectadores se tornam testemunhas de uma revolução em
                movimento, aplaudindo não apenas a velocidade, mas o propósito.
                É a corrida do século XXI, onde o destino é garantir um bom
                lugar para as gerações por vir. A fórmula E é o futuro do
                automobilismo."
        />
        <SectionMais
          nome="Proposto"
          title="O Desafio"
          content="    O Challenge FIAP é um programa de competições que oferece aos
                alunos a oportunidade de colocar em prática seus conhecimentos e
                habilidades, resolver problemas reais de empresas. Os desafios
                são propostos por empresas parceiras da FIAP, que apresentam
                problemas que enfrentam em seu dia a dia e buscam soluções
                inovadoras e criativas dos alunos. Neste ano a empresa Mahindra
                fez sua proposta. A nossa equipe foi desafiada a popularizar
                ainda mais a fórmula E, trazendo mais visibilidade a competição.
                A empresa solicitou aos alunos da FIAP para que desenvolvessem
                uma aplicação web focada em interação, na qual incentiva novos
                públicos a consumir e se aprofundar na fórmula E."
        />
        <SectionMais
          nome="Solução E-Pit"
          title="Saiba Mais"
          content=" O sistema E-Pit contará com uma plataforma destinada aqueles que
                desejam se provar como reais fãs e conhecedores do esporte
                competindo entre amigos nas ligas, ou outros jogadores ao redor
                do mundo disputando pontos e colocações no ranking global. Crie
                seu time, escale os melhores pilotos e pontue com suas
                performances nas corridas. Suba no pódio, dispute prêmios
                incríveis e conquiste o título de campeão global!"
        >
          <ul className="features-list">
            <li>
              <strong>Monte sua equipe dos sonhos:</strong>
              Escolha entre os melhores pilotos da Fórmula E e personalize sua
              estratégia de acordo com o seu estilo de jogo.
            </li>
            <li>
              <strong>Acompanhe as corridas em tempo real:</strong>
              Viva a emoção das corridas ao vivo ou através do E-tracker, o mapa
              em tempo real da plataforma, e acompanhe cada ponto conquistado
              pelos seus pilotos.
            </li>
            <li>
              <strong>Dispute:</strong> Participe do sistema rankeado com seus
              amigos ou desafie jogadores do mundo todo em rankings globais.
            </li>
            <li>
              <strong>Aprimore suas habilidades:</strong>
              Analise estatísticas, estude as pistas e faça as melhores escolhas
              para levar seu time ao topo. Progrida através de acúmulos de
              pontos, e desbloqueie novos pilotos e funcionalidades para a sua
              equipe.
            </li>
            <li>
              <strong>Ganhe prêmios incríveis:</strong>
              Dispute prêmios exclusivos nas ligas e mostre que você é o rei da
              Fórmula E no E-Pit!
            </li>
            <li>
              <strong>Acompanhe tudo em um só lugar:</strong>
              Acesse todas as informações que você precisa sobre a Fórmula E em
              um único site fácil de usar.
            </li>
            <li>
              <strong>Fique conectado:</strong> Participe da comunidade E-Pit e
              interaja com outros fãs da categoria.
            </li>
            <li>
              <strong>Estatísticas:</strong> Acesse estatísticas detalhadas
              sobre os pilotos, equipes e corridas para aprimorar suas
              estratégias e tomar decisões mais informadas.
            </li>
            <li>
              <strong>Replays:</strong> Reviva os momentos mais emocionantes das
              corridas com replays completos e em alta qualidade.
            </li>
            <li>
              <strong>Notícias:</strong> Fique por dentro de tudo o que acontece
              no mundo da Fórmula E com notícias atualizadas em tempo real.
            </li>
            <li>
              <strong>Sustentabilidade e Inovação:</strong>
              Explore uma seção dedicada à sustentabilidade e inovação na
              Fórmula E, aprendendo sobre as iniciativas da categoria para um
              futuro mais verde e tecnológico.
            </li>
          </ul>
        </SectionMais>
      </main>
      <Footer/>
    </div>
  );
}

