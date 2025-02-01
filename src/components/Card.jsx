import { useEffect, useRef } from "react";
import "../styles/Card.css";

export default function Card({ searchTerm }) {
  const dataRef = useRef(null);

  useEffect(() => {
    let ignore = false;
    const searchEndPoint = "https://api.giphy.com/v1/gifs/search/";
    const apiKey = "qTQWvwscGyieFD2MgbroAfFBI1r7iVuj";
    console.log(searchEndPoint + "?q=" + searchTerm + "&api_key=" + apiKey);
    if (!ignore) {
      fetch(
        searchEndPoint + "?q=" + searchTerm + "&api_key=" + apiKey + "&limit=1",
        {
          mode: "cors",
        }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          dataRef.current = response.data[0].url;
          console.log(dataRef.current);
        });
    }
    return () => {
      ignore = true;
    };
  }, [searchTerm]);
  console.log(dataRef.current);
  return <img src={dataRef.current} alt="" />;
}
