import "../styles/Card.css";

export default function Card({ cardStatus }) {
  return (
    <button className="card">
      <img src={cardStatus.imageUrl} alt="" />
      <h2>{cardStatus.searchTerm}</h2>
    </button>
  );
}
