import React, { useState } from "react";
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
} from "./styles";

const navItems = [
  { label: "最新活動訊息", href: "/explore/1" },
  { label: "最新購車優惠", href: "/explore/2" },
  { label: "車主經驗分享", href: "/explore/3" },
];

const ExplorePage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
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
            key={item.href}
            className={selectedIdx === idx ? "selected" : ""}
            onClick={() => setSelectedIdx(idx)}
          >
            <a href={item.href}>{item.label}</a>
          </ExploreListItem>
        ))}
      </ExploreList>
      <ArticleSection>
        <ArticleLeft>
          <ArticleTag>焦點推薦</ArticleTag>
          <ArticleTitle>
            MG史上最強檔購車優惠六月開跑！
            <br />
            HS、ZS最低入主價86.5萬／69.9萬起
          </ArticleTitle>
          <ArticleDesc>
            MG HS車系推出MAX三車型升級配備不加價
            再享貸款、配件金、空淨機多重好禮
          </ArticleDesc>
          <ArticleTag
            className="no-dot"
            style={{
              color: "#007aff",
              marginTop: "1rem",
            }}
          >
            #行銷活動
          </ArticleTag>
          <ArticleDate>2025/05/29</ArticleDate>
          <ArticleButton>
            查看更多 <span>&rarr;</span>
          </ArticleButton>
        </ArticleLeft>
        <ArticleRight>
          <ArticleImage
            src="/media/explore/0529news.thumb.960.480.png"
            alt="活動主圖"
          />
        </ArticleRight>
      </ArticleSection>
    </div>
  );
};

export default ExplorePage;
