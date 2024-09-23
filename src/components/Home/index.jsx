import { Button } from "../Button";
import { CardHome } from "../CardHome";
import { Header } from "../Header/index.jsx"
import "./index.css"


export function Home() {
    return (
        <>
        <div className="background">
          <Header/>
          <section className="content">
            <h1>Formula E</h1>
            <p>
              Notícias e estatísticas na <br />
              palma da sua mão.
            </p>
            <Button href="https://mahindra-challenge-2024.vercel.app/" nome="VIVA ESSA EXPERIÊNCIA" blank="_blank"/>
          <CardHome/>
          <CardHome/>
          <CardHome/>
          <CardHome/>
          </section>
        </div>
        </>
    )
}