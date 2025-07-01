import React from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  ArticleContainer,
  ArticleHeroImage,
  ArticleContent,
  DetailTag,
  DetailDate,
} from "./styles";

// Helper function to render content blocks
const renderContent = (block) => {
  switch (block.type) {
    case "heading":
      return React.createElement(`h${block.level || 2}`, null, block.text);
    case "paragraph":
      return <p>{block.text}</p>;
    case "image":
      return <img src={block.src} alt={block.alt || ""} />;
    default:
      return null;
  }
};

const ArticleDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { article } = location.state || {}; // Safely access state

  if (!article) {
    // TODO: Fetch article data from an API if not passed in state
    return <div>文章不存在或無法讀取。</div>;
  }

  return (
    <ArticleContainer>
      <h1>{article.title}</h1>
      <DetailDate>{article.date}</DetailDate>
      {article.tags &&
        article.tags.map((tag, index) => (
          <DetailTag key={index}>{tag}</DetailTag>
        ))}
      {article.heroImage && (
        <ArticleHeroImage src={article.heroImage} alt={article.title} />
      )}
      <ArticleContent>
        {article.content.map((block, index) => (
          <React.Fragment key={index}>{renderContent(block)}</React.Fragment>
        ))}
      </ArticleContent>
    </ArticleContainer>
  );
};

export default ArticleDetailPage;
