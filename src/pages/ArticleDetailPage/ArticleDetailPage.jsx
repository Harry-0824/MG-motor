import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  ArticleContainer,
  ArticleHeroImage,
  ArticleContent,
  DetailTag,
  DetailDate,
  ImageRow,
} from "./styles";
import { ExploreBanner, ExploreImg, ExploreTitle } from "../ExplorePage/styles";
import { latestNews, purchaseOffers, ownerStories } from "../../data/articles";

const allArticles = [...latestNews, ...purchaseOffers, ...ownerStories];

// Helper function to render content blocks
const renderContent = (block) => {
  switch (block.type) {
    case "heading":
      return React.createElement(`h${block.level || 2}`, null, block.text);
    case "paragraph":
      return <p>{block.text}</p>;
    case "image":
      return <img src={block.src} alt={block.alt || ""} />;
    case "image-row":
      return (
        <ImageRow>
          {block.images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt || ""} />
          ))}
        </ImageRow>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          {block.title && <caption>{block.title}</caption>}
          <thead>
            <tr>
              {block.headers.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    textAlign: "left",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{ padding: "8px", border: "1px solid #ddd" }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    default:
      return null;
  }
};

const ArticleDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  let { article } = location.state || {}; // Safely access state

  if (!article) {
    article = allArticles.find((a) => a.id === id);
  }

  if (!article) {
    // TODO: Fetch article data from an API if not passed in state
    return <div>文章不存在或無法讀取。</div>;
  }

  return (
    <>
      <ExploreBanner>
        <ExploreImg
          src="/media/explore/品牌介紹頁_Banner_PC.jpg"
          alt="Explore MG"
        />
      </ExploreBanner>
      <ArticleContainer>
        <h1>{article.title}</h1>
        <DetailDate>{article.date}</DetailDate>
        <div>
          {article.tags &&
            article.tags.map((tag, index) => (
              <DetailTag key={index}>{tag}</DetailTag>
            ))}
        </div>

        <ArticleContent>
          {article.content.map((block, index) => (
            <React.Fragment key={index}>{renderContent(block)}</React.Fragment>
          ))}
        </ArticleContent>
      </ArticleContainer>
    </>
  );
};

export default ArticleDetailPage;
