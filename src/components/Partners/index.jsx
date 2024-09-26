import mahindra from "../../assets/mahindra-logo.svg"
import epit from "../../assets/logo.svg"
import fiap from "../../assets/fiap-logo.svg"
import "./index.css"

export function Partners() {
    return(
        <>
        <section className="partners">
            <img src={mahindra} alt="Logo Mahindra" />
            <img src={epit} alt="Logo E-PIT" id="epit" />
            <img src={fiap} alt="Logo Fiap" />
        </section>
        </>
    )
}