import Card from "./Card";
import "../styles/Board.css";

export default function Board({ cardStatus, shuffledOrder }) {
  return (
    <div className="container">
      <Card cardStatus={cardStatus[shuffledOrder[0]]} />
      <Card cardStatus={cardStatus[shuffledOrder[1]]} />
      <Card cardStatus={cardStatus[shuffledOrder[2]]} />
      <Card cardStatus={cardStatus[shuffledOrder[3]]} />
      <Card cardStatus={cardStatus[shuffledOrder[4]]} />
      <Card cardStatus={cardStatus[shuffledOrder[5]]} />
      <Card cardStatus={cardStatus[shuffledOrder[6]]} />
      <Card cardStatus={cardStatus[shuffledOrder[7]]} />
      <Card cardStatus={cardStatus[shuffledOrder[8]]} />
      <Card cardStatus={cardStatus[shuffledOrder[9]]} />
      <Card cardStatus={cardStatus[shuffledOrder[10]]} />
      <Card cardStatus={cardStatus[shuffledOrder[11]]} />
    </div>
  );
}
