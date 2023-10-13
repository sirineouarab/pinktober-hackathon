import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./articles.css";

function Articles() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL + "articles";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setArticleData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <main className="mainActicles-cntr">
        <h1 id="articles-title">Breast Cancer Articles</h1>

        <div className="articles-cntr">
          {articleData.map((article, index) => {
            const img = article.image;

            return (
              <div className="article-cntr" key={index}>
                <p>
                  <a className="article-link" href={article.link}>
                    {article.title}
                  </a>
                  {article.description}
                </p>

                <img alt={article.title} src={img} className="article-img" />
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Articles;
