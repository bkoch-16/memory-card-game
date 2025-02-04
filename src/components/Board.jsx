import Card from "./Card";
import "../styles/Board.css";

export default function Board({ cardStatus, shuffledOrder, handleClick }) {
  return (
    <div className="container">
      <Card
        cardStatus={cardStatus[shuffledOrder[0]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[1]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[2]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[3]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[4]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[5]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[6]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[7]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[8]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[9]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[10]]}
        handleClick={handleClick}
      />
      <Card
        cardStatus={cardStatus[shuffledOrder[11]]}
        handleClick={handleClick}
      />
    </div>
  );
}
