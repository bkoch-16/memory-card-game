import "../styles/Card.css";

export default function Card({ cardStatus }) {
  return (
    <button className="card">
      <img src={cardStatus.imageUrl} alt="" />
      <h1>{cardStatus.searchTerm}</h1>
    </button>
  );
}
