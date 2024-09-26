import "./index.css";

export function CardComu({ nome, conteudo }) {
  return (
    <>
      <div className="card-comu">
        <h2>{nome}</h2>
        <p>{conteudo}</p>
      </div>
    </>
  );
}
