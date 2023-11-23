import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

// fetch API https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dMQpxH6yITibvB8yXJ5tx8z2uRrrZcQL
function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [gifSearch, setGifSearch] = useState("");
  const [submit, setSubmit] = useState(false);

  const baseUrl = `https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=dMQpxH6yITibvB8yXJ5tx8z2uRrrZcQL`;
  useEffect(() => {
    if (submit && gifSearch) {
      fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => {
          const firstThreeGifs = data.data
            .slice(0, 3)
            .map((item) => item.images.original.url);
          setGifs(firstThreeGifs);
          setSubmit(false);
        })
        .catch((error) => console.error(error));
    }
  }, [baseUrl,submit, gifSearch]);

  function handleChange(e) {
    setGifSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    console.log(gifSearch);
  }

  return (
    <div>
      <GifList gifData={gifs} />
      <GifSearch
        gifsearch={gifSearch}
        handlechange={handleChange}
        handlesubmit={handleSubmit}
      />
    </div>
  );
}

export default GifListContainer;