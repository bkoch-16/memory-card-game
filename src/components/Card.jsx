import "../styles/Card.css";

export default function Card({ cardStatus, handleClick }) {
  return (
    <button className="card" onClick={handleClick}>
      <img src={cardStatus.imageUrl} alt="" />
      <h2>{cardStatus.searchTerm}</h2>
    </button>
  );
}
