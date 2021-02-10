import React, { useState, useEffect } from "react";
import Article from "../Components/Article";

function Headlines() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Oops! Error occured");
    console.error(error);
  }, [error]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b28cd9d2fd3c44beb9993828b645328d"
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (!loading) {
    return (
      <div className="newsContainer headlines">
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

export default Headlines;
