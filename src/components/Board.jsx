import Card from "./Card";
import "../styles/Board.css";

export default function Board({ cardStatus, shuffledOrder }) {
  return (
    <div className="container">
      <Card searchTerm={cardStatus[shuffledOrder[0]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[1]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[2]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[3]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[4]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[5]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[6]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[7]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[8]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[9]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[10]].searchTerm} />
      <Card searchTerm={cardStatus[shuffledOrder[11]].searchTerm} />
    </div>
  );
}
