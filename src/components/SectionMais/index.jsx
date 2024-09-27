import "./index.css"



export function SectionMais({ nome, content, children, title }) {
  return (
    <div className="content-more">
      <div className="title-more">
        <span className="text-gradient">{title}</span>
        <h2>{nome}</h2>
      </div>
      <p>{content}</p>
      {children}
    </div>
  );
}
