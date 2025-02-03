import { useEffect, useRef } from "react";
import "../styles/Card.css";

export default function Card({ searchTerm }) {
  const dataRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      const searchEndPoint = "https://api.giphy.com/v1/gifs/search/";
      const apiKey = "qTQWvwscGyieFD2MgbroAfFBI1r7iVuj";
      const response = await fetch(
        searchEndPoint + "?q=" + searchTerm + "&api_key=" + apiKey + "&limit=1",
        {
          mode: "cors",
        }
      );
      const jsonData = await response.json();
      dataRef.current = jsonData.data[0].images.original.url;
    }
    fetchData();
  }, [searchTerm]);
  return (
    <button className="card">
      <img src={dataRef.current} alt="" />
      <h1>{searchTerm}</h1>
    </button>
  );
}
