import React, { useState, useEffect } from "react";
import Article from "../Components/Article";

function Sports() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(
    () =>
      fetch(
        "https://newsapi.org/v2/everything?q=sports&apiKey=b28cd9d2fd3c44beb9993828b645328d"
      )
        //fetch("/json/politics.json")
        .then((res) => res.json())
        .then((data) => {
          setNews(data.articles);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        }),
    []
  );

  useEffect(() => {
    console.log("Oops! Error occured");
    console.error(error);
  }, [error]);

  if (!loading) {
    return (
      <div className="newsContainer">
        {news.map((newsObj) => (
          <Article key={newsObj.title} newsObj={newsObj} />
        ))}
      </div>
    );
  } else {
    if (!error) {
      return "Loading....";
    } else {
      return (
        <div className="error">
          Oops! Error Occured<br></br>
          {error}
        </div>
      );
    }
  }
}

export default Sports;
