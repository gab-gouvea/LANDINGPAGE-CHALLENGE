import { Comunidade } from "../components/Comunidade";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Newsletter } from "../components/Newsletter";
import { Partners } from "../components/Partners";

export function Landing() {
    return (
        <>
        <Home/>
        <Comunidade/>
        <Partners/>
        <Newsletter/>
        <Footer/>
        </>
    )
}
