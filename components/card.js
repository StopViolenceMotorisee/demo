export function Card({ content, context }) {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-5">“ {content} ”</p>
        <p className="subtitle is-5">{context}</p>
      </div>
    </div>
  );
}
