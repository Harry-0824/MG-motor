import React, { useRef, useState } from "react";
import {
  HeroImageWrapper,
  HeroImage,
  HeroNavBar,
  HeroNavItem,
  SectionAnchor,
  DesignSectionTitle,
  DetailSectionWrapper,
  DetailSectionTitle,
  PowerImage,
  PowerAccordionWrapper,
  SafetySectionWrapper,
  SafetyCarouselWrapperStyled,
  SafetyImageBlock,
  SafetyImage,
  SafetyText,
  ExperienceTextWrapper, // 匯入 ExperienceTextWrapper
  ExperienceCarouselWrapperStyled, // 匯入 ExperienceCarouselWrapperStyled
  ContextualImageWrapper, // 匯入 ContextualImageWrapper
  ContextualImage, // 匯入 ContextualImage
  ContextualText, // 恢復匯入 ContextualText
  OverlayText, // 保留匯入 OverlayText
  SpaceCarouselWrapper, // 匯入 SpaceCarouselWrapper
  SafetyTextOverlayWrapper, // 匯入 SafetyTextOverlayWrapper
  SafetyHeaderText, // 匯入 SafetyHeaderText
  SafetyParagraphText, // 匯入 SafetyParagraphText
} from "./styles";
import {
  GalleryWithTextType1,
  GalleryWithTextType2,
} from "../../components/GalleryWithText/GalleryWithText";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "../../components/Carousel/Carousel";

const NAV_ITEMS = [
  { label: "天生出眾外觀", anchor: "exterior_design" },
  { label: "科技質感座艙", anchor: "tech_cockpit" },
  { label: " 輕鬆移動體驗", anchor: "mobility_experience" },
  { label: "就是要大空間", anchor: "large_space" },
  { label: "極致安全守護", anchor: "safety_protection" },
  { label: "相關情報", anchor: "related_information" },
  { label: "規格", anchor: "specifications" },
];

const ZSPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRefs = NAV_ITEMS.map(() => useRef(null));

  const handleNavClick = (idx) => {
    setActiveIdx(idx);
    sectionRefs[idx].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="zs-page">
      {" "}
      {/* Changed class name to zs-page */}
      <HeroImageWrapper>
        <HeroImage
          src="/media/zs/車型頁_2160_540_pc.jpg" // Placeholder - Update with ZS specific image
          alt="ZS Hero"
        />
      </HeroImageWrapper>
      <HeroNavBar>
        {NAV_ITEMS.map((item, idx) => (
          <HeroNavItem
            key={item.anchor}
            active={activeIdx === idx}
            onClick={() => handleNavClick(idx)}
          >
            {item.label}
          </HeroNavItem>
        ))}
      </HeroNavBar>
      {/* 對應區塊錨點 */}
      {NAV_ITEMS.map((item, idx) =>
        item.anchor === "exterior_design" ? (
          <SectionAnchor
            key={item.anchor}
            id={item.anchor}
            ref={sectionRefs[idx]}
          >
            <DesignSectionTitle>他們說 你天生不一樣</DesignSectionTitle>
            <ContextualImageWrapper>
              <ContextualImage
                src="/media/zs/MG ZS官網網頁_概念頁_PC_1920x850.jpg"
                alt="ZS Contextual Image"
              />
            </ContextualImageWrapper>
            <GalleryWithTextType2
              slides={[
                {
                  title: "想看得更多？把天窗打開吧", // Placeholder - Update with ZS specific text
                  desc: "大面積天窗讓車室空間倍感敞亮，移動過程盡情享受天際風光，並搭配電動遮陽簾隨時調節光線。", // Placeholder - Update with ZS specific text
                  image: "/media/zs/MG ZS官網網頁_天窗_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
                {
                  title: "想看更多更廣？10.1吋大螢幕沒在怕", // Placeholder - Update with ZS specific text
                  desc: "可視角度達170度的10.1吋懸浮式觸控螢幕，搭配低反光技術，所有資訊都清晰可見，直覺化的操控介面讓使用上更為便利。（標配 Apple Carplay 與 Android Auto）", // Placeholder - Update with ZS specific text
                  image: "/media/zs/MG ZS官網網頁_儀表板_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
                {
                  title: "還在苦惱人生？我們幫你看透一切", // Placeholder - Update with ZS specific text
                  desc: "搭載360°環景影像輔助系統，利用環繞車身周遭的鏡頭，於觸控螢幕中顯示車輛環視畫面，讓駕駛對車身周遭環境一目了然，停車更能一步到位。", // Placeholder - Update with ZS specific text
                  image: "/media/zs/MG-ZS官網網頁_360環景_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
                {
                  title: "怕熱嗎？來點涼的吧", // Placeholder - Update with ZS specific text
                  desc: "最貼心的後座冷氣出風口，讓車內所有人都能享受舒適乘坐品質。",
                  image: "/media/zs/MG ZS官網網頁_出風口_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
              ]}
            />
            <DesignSectionTitle>醒目神采 當然藏不住</DesignSectionTitle>
            <GalleryWithTextType1
              slides={[
                {
                  title: "銀石之翼LED頭燈", // Placeholder - Update with ZS specific text
                  desc: "設計理念源自英國銀石賽道，勾勒出羽翼線條，銳利注視前方一切事物。", // Placeholder - Update with ZS specific text
                  image: "/media/zs/MG ZS官網網頁_頭燈_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
                {
                  title: "光羽LED尾燈", // Placeholder - Update with ZS specific text
                  desc: "精緻燈體組成俐落光帶，外型有如羽翼展開，與頭燈設計相互襯托，在夜間清晰可視。", // Placeholder - Update with ZS specific text
                  image: "/media/zs/MG-ZS官網網頁_尾燈_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
                {
                  title: "黑曜矩陣水箱護罩", // Placeholder - Update with ZS specific text
                  desc: "蜂巢格柵均衡排列，藉由凹凸呈現如波浪般的反射，展現低調內斂的絕佳質感。", // Placeholder - Update with ZS specific text
                  image: "/media/zs/水箱護罩_FA_0831修改.png", // Placeholder - Update with ZS specific image
                },
                {
                  title: "17吋銀黑切削鋁圈", // Placeholder - Update with ZS specific text
                  desc: "雙色切削勾勒線條，輔以亮黑烤漆打底，動靜之間皆展現個人風格。", // Placeholder - Update with ZS specific text
                  image: "/media/zs/MG ZS官網網頁_輪圈_PC_1920x1080.jpg", // Placeholder - Update with ZS specific image
                },
              ]}
            />
            <DetailSectionWrapper>
              <Accordion
                items={[
                  {
                    title: "霧銀車頂行李架",
                    content: [
                      "期待一場戶外體驗嗎？具備可承載75kg的車頂行李架讓你有更多空間變化運用。",
                    ],
                    image:
                      "/media/zs/accordion/MG-ZS官網網頁_天窗_PC_810x455.jpg",
                  },
                  {
                    title: "霧銀風格飾件",
                    content: ["流線風格線條搭配霧銀飾件，處處都展現內斂細節。"],
                    image:
                      "/media/zs/accordion/MG-ZS官網網頁_霧銀風格套件_PC_810x455.jpg",
                  },
                ]}
              />
            </DetailSectionWrapper>
          </SectionAnchor>
        ) : item.anchor === "tech_cockpit" ? (
          <SectionAnchor
            key={item.anchor}
            id={item.anchor}
            ref={sectionRefs[idx]}
          >
            <ContextualImageWrapper>
              <ContextualImage
                src="/media/zs/MG-ZS官網網頁_內裝_PC_1920x850.jpg"
                alt="ZS Contextual Image"
              />
              <ContextualText>視覺 觸覺 都是種享受</ContextualText>{" "}
              {/* 將 OverlayText 改回 ContextualText */}
            </ContextualImageWrapper>
            <DetailSectionWrapper>
              <Accordion
                items={[
                  {
                    title: "皮質包覆控台/皮質座椅(駕駛座六向調整電動座椅)",
                    content: [
                      "軟質材料包覆與人體工學設計，展現高級質感與絕佳舒適體感，讓每次乘坐都是享受。",
                    ],
                    image:
                      "/media/zs/accordion/MG-ZS官網網頁_皮質座椅_PC_810x455.jpg",
                  },
                  {
                    title: "多功能數位儀表",
                    content: [
                      "行車資訊清晰的數位儀表配置，彙整車輛、油耗、電壓及四輪獨立TPMS胎壓數值，提供高辨識度的科技體驗，同時提升用車安全",
                    ],
                    image:
                      "/media/zs/accordion/MG-ZS官網網頁_數位化駕駛儀表_PC_810x455.jpg",
                  },
                  {
                    title: "EPB電子手煞車 / Auto Hold智慧自動駐車功能",
                    content: [
                      "停車不必手忙腳亂，兼具Auto Hold智慧自動駐車功能讓走走停停更加從容。",
                    ],
                    image:
                      "/media/zs/accordion/MG-ZS官網網頁_0816_電子手煞車_PC_810x455.jpg",
                  },
                  {
                    title: "Keyless Entry & Push Start 啟閉系統",
                    content: [
                      "在不使用傳統金屬鑰匙的情況下，輕鬆完成車輛的解鎖、上鎖、啟動和關閉等操作。",
                    ],
                    image:
                      "/media/zs/accordion/MG-ZS官網網頁_keyless_PC_810x455.jpg",
                  },
                ]}
              />
            </DetailSectionWrapper>
          </SectionAnchor>
        ) : item.anchor === "mobility_experience" ? ( // Create mobility_experience section
          <SectionAnchor
            key={item.anchor}
            id={item.anchor}
            ref={sectionRefs[idx]}
          >
            <ContextualImageWrapper>
              <ContextualImage
                src="/media/zs/MG-ZS官網網頁_0817_路跑頁_PC_1920x850.jpg"
                alt="ZS Contextual Image"
              />
              <OverlayText>
                動力搭載1.5L
                DVVT雙連續可變汽門正時汽油引擎，搭配可模擬8速手自排的CVT無段變速系統，為駕駛帶來輸出順暢且節能的輕鬆移動體驗
              </OverlayText>
            </ContextualImageWrapper>
          </SectionAnchor>
        ) : item.anchor === "large_space" ? ( // Create large_space section
          <SectionAnchor
            key={item.anchor}
            id={item.anchor}
            ref={sectionRefs[idx]}
          >
            <SpaceCarouselWrapper>
              <Carousel
                slides={[
                  {
                    image: "/media/zs/MG-ZS官網網頁_後座-4_PC_1920x700.jpg",
                    h1: "448L行李廂空間",
                    p: "放得進想放的，裝得下想裝的，充足空間自由運用。",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_後座-3_PC_1920x700.jpg",
                    h1: "行李廂底板空間擴增設計",
                    p: "行李廂空間平整化設計，需要時也能移動底板向下調整，增加置物高度，擴增後空間可達528L。",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_後座-1_PC_1920x700.jpg",
                    h1: "後車廂靈活運用",
                    p: "後車廂提供靈活的運用空間，需要時可以將座椅靈活運用，讓空間利用最大化，座椅全傾倒後空間可達1,375L。",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_後座-2_PC_1920x700.jpg",
                    h1: "後排座椅6/4分離椅背設計",
                    p: "後座椅背能以6/4分離傾倒，依照不同需求提供最具靈活性的空間變化。",
                  },
                ]}
                dotsClassName="carousel-dots"
                bottomLeftClassName="carousel-bottom-left"
              />
            </SpaceCarouselWrapper>
          </SectionAnchor>
        ) : item.anchor === "safety_protection" ? ( // Create safety_protection section
          <SectionAnchor
            key={item.anchor}
            id={item.anchor}
            ref={sectionRefs[idx]}
          >
            <ContextualImageWrapper>
              <ContextualImage
                src="/media/zs/MG-ZS官網網頁_封底_PC_1920x850.jpg" // Placeholder - Update with ZS specific safety image
                alt="ZS Safety Image"
              />
              <SafetyTextOverlayWrapper>
                <SafetyHeaderText>
                  MG Pilot 2.0 Level 2 智慧駕駛輔助
                </SafetyHeaderText>
                <SafetyParagraphText>
                  配備是齊全的，安全是無價的，帶給你超乎想像的安全配備。
                </SafetyParagraphText>
              </SafetyTextOverlayWrapper>
            </ContextualImageWrapper>
            <SafetyCarouselWrapperStyled>
              <Carousel
                slides={[
                  {
                    image: "/media/zs/MG-ZS官網網頁_TJA_PC_1920x850.jpg",
                    link: "https://www.mgmotor.com.tw/configuration/hs.html",
                    h1: "TJA 交通壅塞輔助",
                    buttonText: "了解更多",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_ACC_PC_1920x850.jpg",
                    link: "https://www.mgmotor.com.tw/configuration/hs.html",
                    h1: "ACC 智慧型全速域主動車距巡航控制系統 (附 Stop & Go)",
                    buttonText: "了解更多",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_LKA_PC_1920x850.jpg",
                    link: "https://www.mgmotor.com.tw/configuration/hs.html",
                    h1: " LKA車道保持輔助系統",
                    buttonText: "了解更多",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_AEB_PC_1920x850.jpg",
                    link: "https://www.mgmotor.com.tw/configuration/hs.html",
                    h1: "AEB 自動緊急剎車輔助系統",
                    buttonText: "了解更多",
                  },
                  {
                    image: "/media/zs/MG-ZS官網網頁_BSD_PC_1920x850.jpg",
                    link: "https://www.mgmotor.com.tw/configuration/hs.html",
                    h1: "BSD盲點偵測系統",
                    buttonText: "了解更多",
                  },
                ]}
                dotsClassName="carousel-dots"
                bottomLeftClassName="carousel-bottom-left"
              />
            </SafetyCarouselWrapperStyled>
          </SectionAnchor>
        ) : null
      )}
    </div>
  );
};

// Placeholder data for ZS - Update with actual ZS specifications
const zsSpecData = {
  modelName: "ZS",
  trims: [
    {
      name: "ZS 1.5L 旗艦版", // Example trim - Update with ZS specific data
      price: "749,000", // Example price - Update with ZS specific data
      colors: [
        {
          name: "電掣白",
          hex: "#FFFFFF",
          imageSrc:
            "/media/home/MG-ZS官網Resize_0904_官網首頁_車色路跑頁_960X300_PC.jpg", // Placeholder - Update with ZS specific image
          swatchSrc: "/media/hs/2022_HS系列_白_color pic.png", // Placeholder - Update with ZS specific image
        },
        // Add other ZS colors
      ],
      equipment: {
        column1: [
          "MG PILOT 智慧駕駛輔助系統", // Placeholder - Update with ZS specific data
          // Add ZS specific equipment
        ],
        column2: [
          "LED頭燈", // Placeholder - Update with ZS specific data
          // Add ZS specific equipment
        ],
      },
      basicSpecs: [
        { label: "長*寬*高(mm)", value: "4,323*1,809*1,653" }, // Example spec - Update with ZS specific data
        { label: "軸距(mm)", value: "2,585" }, // Example spec - Update with ZS specific data
        {
          label: "引擎型式",
          value: "1.5L 自然進氣引擎", // Example spec - Update with ZS specific data
        },
        {
          label: "變速箱系統",
          value: "CVT 無段變速", // Example spec - Update with ZS specific data
        },
        { label: "驅動系統", value: "前輪驅動" },
        {
          label: "懸吊系統(前/後)",
          value: "獨立麥花臣懸吊/扭力樑式懸吊", // Example spec - Update with ZS specific data
        },
        { label: "最大馬力(ps/rpm)", value: "114/6,000" }, // Example spec - Update with ZS specific data
        { label: "最大扭力(kg-m/rpm)", value: "15.3/4,500" }, // Example spec - Update with ZS specific data
      ],
      specImages: {
        main: {
          src: "/media/home/MG-ZS官網Resize_0904_官網首頁_車色路跑頁_960X300_PC.jpg", // Placeholder - Update with ZS specific image
          alt: "ZS 1.5L 旗艦版",
        },
        dimensionsDisplayImage: {
          src: "/media/hs/車款介紹頁_HS PHEV_三視圖_PC_灰.png", // Placeholder - Update with ZS specific image
          alt: "ZS 1.5L 旗艦版 車輛尺寸",
        },
      },
      disclaimer: "免責聲明: 此車輛尺寸為標準尺寸, 實際尺寸以交車為準",
      bookingLink: "https://www.mgmotor.com.tw/testdrive.html",
      onlineOrderLink: "https://www.mgmotor.com.tw/order.html",
    },
  ],
};

export default ZSPage;
