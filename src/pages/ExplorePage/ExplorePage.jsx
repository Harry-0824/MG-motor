import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Pagination } from "antd";
import {
  ExploreBanner,
  ExploreImg,
  ExploreTitle,
  ExploreList,
  ExploreListItem,
  ArticleSection,
  ArticleLeft,
  ArticleRight,
  ArticleTitle,
  ArticleDesc,
  ArticleTag,
  ArticleDate,
  ArticleButton,
  ArticleImage,
  FourColumnSection,
  FourColumnItem,
  FourColumnImage,
  FourColumnContent,
  FourColumnTitle,
  FourColumnDesc,
  FourColumnTag,
  FourColumnDate,
  PaginationWrapper,
} from "./styles";
import { latestNews, purchaseOffers, ownerStories } from "../../data/articles";

const navItems = [
  { label: "最新活動訊息", data: latestNews },
  { label: "最新購車優惠", data: purchaseOffers },
  { label: "車主經驗分享", data: ownerStories },
];

const ExplorePage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedIdx]);

  const handleNavigate = (article) => {
    history.push(`/article/${article.id}`, { article });
  };

  const selectedCategoryData = navItems[selectedIdx].data;

  const featuredArticle =
    selectedCategoryData.length > 0 ? selectedCategoryData[0] : null;
  const articles =
    selectedCategoryData.length > 1 ? selectedCategoryData.slice(1) : [];

  const articlesPerPage = 8;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="explore-page">
      <ExploreBanner>
        <ExploreImg
          src="/media/explore/品牌介紹頁_Banner_PC.jpg"
          alt="Explore MG"
        />
        <ExploreTitle>探索 MG 最新活動消息</ExploreTitle>
      </ExploreBanner>
      <ExploreList>
        {navItems.map((item, idx) => (
          <ExploreListItem
            key={item.label}
            className={selectedIdx === idx ? "selected" : ""}
            onClick={() => setSelectedIdx(idx)}
          >
            <a href={item.href} onClick={(e) => e.preventDefault()}>
              {item.label}
            </a>
          </ExploreListItem>
        ))}
      </ExploreList>
      {featuredArticle ? (
        <>
          <ArticleSection onClick={() => handleNavigate(featuredArticle)}>
            <ArticleLeft>
              <ArticleTag>焦點推薦</ArticleTag>
              <ArticleTitle>{featuredArticle.title}</ArticleTitle>
              <ArticleDesc>{featuredArticle.desc}</ArticleDesc>
              {featuredArticle.tags
                .filter((t) => t !== "焦點推薦")
                .map((tag) => (
                  <ArticleTag
                    key={tag}
                    className="no-dot"
                    style={{
                      color: "#007aff",
                      marginTop: "1rem",
                    }}
                  >
                    {tag}
                  </ArticleTag>
                ))}

              <ArticleDate>{featuredArticle.date}</ArticleDate>
              <ArticleButton>
                查看更多 <span>&rarr;</span>
              </ArticleButton>
            </ArticleLeft>
            <ArticleRight>
              <ArticleImage src={featuredArticle.heroImage} alt="活動主圖" />
            </ArticleRight>
          </ArticleSection>
          <FourColumnSection>
            {currentArticles.map((article) => (
              <FourColumnItem
                key={article.id}
                onClick={() => handleNavigate(article)}
              >
                <FourColumnImage src={article.imgSrc} alt={article.title} />
                <FourColumnContent>
                  <FourColumnTitle>{article.title}</FourColumnTitle>
                  {article.desc && (
                    <FourColumnDesc>{article.desc}</FourColumnDesc>
                  )}
                  {article.tags.map((tag) => (
                    <FourColumnTag key={tag}>{tag}</FourColumnTag>
                  ))}
                  <FourColumnDate>{article.date}</FourColumnDate>
                </FourColumnContent>
              </FourColumnItem>
            ))}
          </FourColumnSection>
          {totalPages > 0 && (
            <PaginationWrapper>
              <Pagination
                current={currentPage}
                total={articles.length}
                pageSize={articlesPerPage}
                onChange={paginate}
              />
            </PaginationWrapper>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          該分類目前沒有文章。
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
