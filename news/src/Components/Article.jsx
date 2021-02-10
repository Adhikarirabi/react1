import React from "react";
import { Link } from "react-router-dom";

function Article(props) {
  if (props.newsObj) {
    return (
      <Link target="_blank" to={{ pathname: props.newsObj.url }}>
        <article>
          <header>
            <h2 className="newsHeader">{props.newsObj.title}</h2>
            <img
              className="newsImage"
              src={
                props.newsObj.urlToImage
                  ? props.newsObj.urlToImage
                  : "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg"
              }
              alt="Error loading news placeholder"
            />
          </header>
          <main>
            <section className="categories">
              <span>{props.newsObj.source.name}</span>
            </section>
            <section className="despcription">
              <p>{props.newsObj.content}</p>
            </section>
            <section>
              <p>
                <Link to={{ pathname: props.newsObj.url }} action="_blank">
                  Full article
                </Link>
              </p>
            </section>
          </main>
        </article>
      </Link>
    );
  } else {
    return "<div>Loading.....</div>";
  }
}

export default Article;
