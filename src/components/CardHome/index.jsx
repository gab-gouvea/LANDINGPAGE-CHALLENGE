import "./index.css"

export function CardHome({nome, conteudo, icon}) {
    return(
        <div className="card-home">
            <h2>{nome}</h2>
            <i className={icon}></i>
            <span>{conteudo}</span>
        </div>
    )
}