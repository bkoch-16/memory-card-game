import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

export default function App() {
  const initialCardStatus = [
    {
      searchTerm: "cat",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    { searchTerm: "dog", hasSelected: false, imageUrl: "src/assets/react.svg" },
    { searchTerm: "cow", hasSelected: false, imageUrl: "src/assets/react.svg" },
    {
      searchTerm: "pigeon",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "squirrel",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "parrot",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "wolf",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "bear",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "deer",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "eagle",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "giraffe",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
    {
      searchTerm: "elephant",
      hasSelected: false,
      imageUrl: "src/assets/react.svg",
    },
  ];
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardStatus, setCardStatus] = useState(initialCardStatus);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData(cardStatus) {
      const searchEndPoint = "https://api.giphy.com/v1/gifs/search/";
      const apiKey = "qTQWvwscGyieFD2MgbroAfFBI1r7iVuj";
      const response = await fetch(
        searchEndPoint +
          "?q=" +
          cardStatus.searchTerm +
          "&api_key=" +
          apiKey +
          "&limit=1",
        {
          mode: "cors",
        }
      );
      const jsonData = await response.json();
      return jsonData.data[0].images.original.url;
    }
    async function updateCards() {
      const mapImage = await Promise.all(
        cardStatus.map(async (card) => {
          if (card.imageUrl === "src/assets/react.svg") {
            const cardImage = await fetchData(card);
            return { ...card, imageUrl: cardImage };
          } else {
            return card;
          }
        })
      );
      setCardStatus(mapImage);
      setIsLoading(false);
    }
    updateCards();
  }, [cardStatus.searchTerm]);

  function randomizeOrder() {
    const initialOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const shuffledOrder = initialOrder.sort(() => 0.5 - Math.random());
    return shuffledOrder;
  }

  let shuffledOrder = randomizeOrder();

  function handleClick(selectedCardName) {
    const clickHandle = cardStatus.map((card) => {
      if (card.searchTerm === selectedCardName) {
        if (card.hasSelected === false) {
          return { ...card, hasSelected: true };
        } else {
          setGameOver(true);
          return card;
        }
      } else {
        return card;
      }
    });
    setCardStatus(clickHandle);
    if (gameOver === false) {
      setCurrentScore(currentScore + 1);
      shuffledOrder = randomizeOrder();
    } else {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      const resetSelected = cardStatus.map((card) => {
        if (card.hasSelected === true) {
          return { ...card, hasSelected: false };
        } else {
          return card;
        }
      });
      setCardStatus(resetSelected);
      setCurrentScore(0);
      setGameOver(false);
    }
  }

  return (
    <>
      <header>
        <h1>Memory Game</h1>
        <div className="scoreBox">
          <span>Current Score: {currentScore}</span>
          <span>Best Score: {highScore}</span>
        </div>
      </header>
      {isLoading ? (
        <h2>Loading, please wait.</h2>
      ) : (
        <Board
          cardStatus={cardStatus}
          shuffledOrder={shuffledOrder}
          handleClick={handleClick}
        />
      )}
    </>
  );
}
