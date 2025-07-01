import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
} from "./styles";

const navItems = [
  { label: "最新活動訊息", href: "/explore/1" },
  { label: "最新購車優惠", href: "/explore/2" },
  { label: "車主經驗分享", href: "/explore/3" },
];

const featuredArticle = {
  id: "featured-post-1",
  title: "MG史上最強檔購車優惠六月開跑！HS、ZS最低入主價86.5萬／69.9萬起",
  date: "2025/05/29",
  tags: ["#行銷活動", "焦點推薦"],
  heroImage: "/media/explore/0529news.thumb.960.480.png",
  content: [
    {
      type: "paragraph",
      text: "MG HS車系推出MAX三車型升級配備不加價，再享貸款、配件金、空淨機多重好禮。",
    },
    {
      type: "heading",
      level: 2,
      text: "HS 2.0T AWD 旗艦版 - 性能王者",
    },
    {
      type: "paragraph",
      text: "搭載2.0升渦輪增壓引擎，提供強勁的動力輸出與全時四輪驅動系統，無論是城市穿梭或戶外探險，都能輕鬆應對。",
    },
    {
      type: "image",
      src: "/media/hs/車款介紹頁_PC_HS 2.0T動力.jpg",
      alt: "HS 2.0T 引擎",
    },
  ],
};

const articles = [
  {
    id: "article-1",
    imgSrc: "/media/banner/MG 1920X960.jpg",
    title: "MG 夏季健檢",
    desc: "盛夏回廠季 MG涼伴相迎",
    tag: "#行銷活動",
    date: "2025/05/29",
    heroImage: "/media/banner/MG 1920X960.jpg",
    content: [{ type: "paragraph", text: "詳細內容建構中..." }],
  },
  {
    id: "article-2",
    imgSrc: "/media/banner/MG HS 限定版首頁Banner - PC 1920x960.jpg",
    title: "MG五月購車超有感!",
    desc: "本月入主即享免繳首年牌燃稅再享購車豪禮任選",
    tag: "#行銷活動",
    date: "2025/05/02",
    heroImage: "/media/banner/MG HS 限定版首頁Banner - PC 1920x960.jpg",
    content: [{ type: "paragraph", text: "詳細內容建構中..." }],
  },
  {
    id: "article-3",
    imgSrc: "/media/banner/MG-ZS官網Resize_0904_官網首頁_ZS車圖1920x960_PC.jpg",
    title: "2025年「HS 2.0T旗艦版、HS PHEV馭電版」最新銷售資訊公告",
    tag: "#News",
    date: "2025/04/18",
    heroImage:
      "/media/banner/MG-ZS官網Resize_0904_官網首頁_ZS車圖1920x960_PC.jpg",
    content: [{ type: "paragraph", text: "詳細內容建構中..." }],
  },
  {
    id: "article-4",
    imgSrc: "/media/banner/官網HERO-Banner_1920x960.jpg",
    title: "MG HS 1.5T馭風前行版限量登場",
    desc: "三大升級套件不加價，制動、型格雙重升級",
    tag: "#行銷活動",
    date: "2025/04/02",
    heroImage: "/media/banner/官網HERO-Banner_1920x960.jpg",
    content: [{ type: "paragraph", text: "詳細內容建構中..." }],
  },
];

const ExplorePage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const history = useHistory();

  const handleNavigate = (article) => {
    history.push(`/article/${article.id}`, { article });
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
            key={item.href}
            className={selectedIdx === idx ? "selected" : ""}
            onClick={() => setSelectedIdx(idx)}
          >
            <a href={item.href}>{item.label}</a>
          </ExploreListItem>
        ))}
      </ExploreList>
      <ArticleSection onClick={() => handleNavigate(featuredArticle)}>
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
          <ArticleImage src={featuredArticle.heroImage} alt="活動主圖" />
        </ArticleRight>
      </ArticleSection>
      <FourColumnSection>
        {articles.map((article) => (
          <FourColumnItem
            key={article.id}
            onClick={() => handleNavigate(article)}
          >
            <FourColumnImage src={article.imgSrc} alt={article.title} />
            <FourColumnContent>
              <FourColumnTitle>{article.title}</FourColumnTitle>
              {article.desc && <FourColumnDesc>{article.desc}</FourColumnDesc>}
              <FourColumnTag>{article.tag}</FourColumnTag>
              <FourColumnDate>{article.date}</FourColumnDate>
            </FourColumnContent>
          </FourColumnItem>
        ))}
      </FourColumnSection>
    </div>
  );
};

export default ExplorePage;
