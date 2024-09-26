import "./index.css"

export function CardHome({nome, conteudo, icon}) {
    return(
        <div className="card-home">
            <div className="teste">
                <h2>{nome}</h2>
                <i className={icon}></i>
            </div>
            <span>{conteudo}</span>
        </div>
    )
}