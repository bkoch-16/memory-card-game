import "../styles/Card.css";

export default function Card({ cardStatus, handleClick }) {
  console.log(cardStatus);
  return (
    <button
      className="card"
      onClick={() => {
        handleClick(cardStatus.searchTerm);
      }}
    >
      <img src={cardStatus.imageUrl} alt="" />
      <h2>{cardStatus.searchTerm}</h2>
    </button>
  );
}
