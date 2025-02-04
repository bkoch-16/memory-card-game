import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardStatus, setCardStatus] = useState([
    { searchTerm: "cat", hasSelected: false, imageUrl: null },
    { searchTerm: "dog", hasSelected: false, imageUrl: null },
    { searchTerm: "cow", hasSelected: false, imageUrl: null },
    { searchTerm: "pigeon", hasSelected: false, imageUrl: null },
    { searchTerm: "squirrel", hasSelected: false, imageUrl: null },
    { searchTerm: "parrot", hasSelected: false, imageUrl: null },
    { searchTerm: "wolf", hasSelected: false, imageUrl: null },
    { searchTerm: "bear", hasSelected: false, imageUrl: null },
    { searchTerm: "deer", hasSelected: false, imageUrl: null },
    { searchTerm: "eagle", hasSelected: false, imageUrl: null },
    { searchTerm: "giraffe", hasSelected: false, imageUrl: null },
    { searchTerm: "elephant", hasSelected: false, imageUrl: null },
  ]);
  useEffect(() => {
    async function fetchData() {
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
    cardStatus.forEach((card) => {
      if (card.imageUrl === null) {
        fetchData();
      }
    });
  }, [cardStatus]);
  function randomizeOrder() {
    const initialOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const shuffledOrder = initialOrder.sort(() => 0.5 - Math.random());
    return shuffledOrder;
  }

  const shuffledOrder = randomizeOrder();
  return <Board cardStatus={cardStatus} shuffledOrder={shuffledOrder} />;
}

export default App;
