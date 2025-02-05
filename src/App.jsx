import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
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
      setCardStatus({
        ...cardStatus,
        imageUrl: jsonData.data[0].images.original.url,
      });
    }

    cardStatus.map((card) => {
      if (card.imageUrl === "src/assets/react.svg") {
        try {
          fetchData(card);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }, [cardStatus]);
  function randomizeOrder() {
    const initialOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const shuffledOrder = initialOrder.sort(() => 0.5 - Math.random());
    return shuffledOrder;
  }

  const shuffledOrder = randomizeOrder();

  function handleClick() {
    if (cardStatus.hasSelected === false) {
      setCardStatus({ ...cardStatus, hasSelected: true });
      setCurrentScore(currentScore + 1);
    } else {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCardStatus(initialCardStatus);
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
      <Board
        cardStatus={cardStatus}
        shuffledOrder={shuffledOrder}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
