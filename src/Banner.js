import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="button_banner">Play</button>
          <button className="button_banner">My List</button>
        </div>
        <h2 className="banner_desc">{movie?.overview}</h2>
      </div>
      <div className="banner_fade"></div>
    </header>
    
  );
};

export default Banner;
