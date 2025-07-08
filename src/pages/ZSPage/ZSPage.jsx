import React, { useState, useRef, useEffect } from "react";
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
  GalleryWithTextType3, // 匯入 GalleryWithTextType3
} from "../../components/GalleryWithText/GalleryWithText";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "../../components/Carousel/Carousel";
import VehicleSpecSheet from "../../components/VehicleSpecSheet/VehicleSpecSheet"; // 引入 VehicleSpecSheet
import DetailedVehicleSpecs from "../../components/DetailedVehicleSpecs/DetailedVehicleSpecs"; // 匯入 DetailedVehicleSpecs
import { zsDetailedSpecs } from "../../data/zs/detailedSpecs.js"; // 匯入 zsDetailedSpecs
import NextStepForm from "../../components/NextStepForm/NextStepForm"; // 匯入 NextStepForm
import StickyBar from "../../components/StickyBar/StickyBar"; // 匯入 StickyBar

const NAV_ITEMS = [
  { label: "天生出眾外觀", anchor: "exterior_design" },
  { label: "科技質感座艙", anchor: "tech_cockpit" },
  { label: " 輕鬆移動體驗", anchor: "mobility_experience" },
  { label: "就是要大空間", anchor: "large_space" },
  { label: "極致安全守護", anchor: "safety_protection" },
  { label: "相關情報", anchor: "related_information" },
  { label: "規格", anchor: "specifications" }, // 將 "規格" 改為 "規格配備" 以符合常見用法
];

const ZSPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [heroImageSrc, setHeroImageSrc] = useState(
    "/media/zs/車型頁_2160_540_pc.webp"
  );
  const [selectedTrim, setSelectedTrim] = useState("旗艦版");
  const navRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const [stickyBarFixed, setStickyBarFixed] = useState(true);
  const stickyBarPortalRef = useRef(null);

  // Initialize sectionRefs as an array of refs
  const sectionRefs = useRef(NAV_ITEMS.map(() => React.createRef()));

  const handleNavClick = (idx) => {
    setActiveIdx(idx);
    // Access refs via sectionRefs.current
    sectionRefs.current[idx].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setHeroImageSrc("/media/zs/車型頁_750_800_mo.webp");
      } else {
        setHeroImageSrc("/media/zs/車型頁_2160_540_pc.webp");
      }
    };

    const handleNavScroll = () => {
      if (navRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
        setShowLeftFade(scrollLeft > 0);
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const handleWindowScroll = () => {
      // Sticky bar logic
      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          setStickyBarFixed(false);
        } else {
          setStickyBarFixed(true);
        }
      }

      // Active nav item logic
      let latestActiveIndex = 0;
      sectionRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 150) {
            // 150px offset for nav bar
            latestActiveIndex = index;
          }
        }
      });
      setActiveIdx(latestActiveIndex);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleWindowScroll);
    handleResize();
    handleWindowScroll();

    const currentNavRef = navRef.current;
    if (currentNavRef) {
      currentNavRef.addEventListener("scroll", handleNavScroll);
      handleNavScroll();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleWindowScroll);
      if (currentNavRef) {
        currentNavRef.removeEventListener("scroll", handleNavScroll);
      }
    };
  }, []);

  return (
    <div className="zs-page">
      {" "}
      {/* Changed class name to zs-page */}
      <HeroImageWrapper>
        <HeroImage
          src={
            window.innerWidth <= 500
              ? "/media/zs/車型頁_750_800_mo.webp"
              : "/media/zs/車型頁_2160_540_pc.webp"
          }
          alt="ZS Hero"
        />
      </HeroImageWrapper>
      <HeroNavBar
        ref={navRef}
        $showLeftFade={showLeftFade}
        $showRightFade={showRightFade}
      >
        {NAV_ITEMS.map((item, idx) => (
          <HeroNavItem
            key={item.anchor}
            $active={activeIdx === idx} // Changed active to $active
            onClick={() => handleNavClick(idx)}
          >
            {item.label}
          </HeroNavItem>
        ))}
      </HeroNavBar>
      {/* 對應區塊錨點 */}
      {NAV_ITEMS.map((item, idx) => (
        <SectionAnchor
          key={item.anchor} // Ensure key prop
          id={item.anchor}
          // Access refs via sectionRefs.current
          ref={sectionRefs.current[idx]}
          style={
            item.anchor === "specifications" ? { marginBottom: 0 } : undefined
          }
        >
          {item.anchor === "exterior_design" ? (
            <>
              <DesignSectionTitle>他們說 你天生不一樣</DesignSectionTitle>
              <ContextualImageWrapper>
                <ContextualImage
                  src="/media/zs/MG ZS官網網頁_概念頁_PC_1920x850.webp"
                  alt="ZS Contextual Image"
                />
              </ContextualImageWrapper>
              <GalleryWithTextType2
                slides={[
                  {
                    title: "想看得更多？把天窗打開吧", // Placeholder - Update with ZS specific text
                    desc: "大面積天窗讓車室空間倍感敞亮，移動過程盡情享受天際風光，並搭配電動遮陽簾隨時調節光線。", // Placeholder - Update with ZS specific text
                    image: "/media/zs/MG ZS官網網頁_天窗_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
                  },
                  {
                    title: "想看更多更廣？10.1吋大螢幕沒在怕", // Placeholder - Update with ZS specific text
                    desc: "可視角度達170度的10.1吋懸浮式觸控螢幕，搭配低反光技術，所有資訊都清晰可見，直覺化的操控介面讓使用上更為便利。（標配 Apple Carplay 與 Android Auto）", // Placeholder - Update with ZS specific text
                    image: "/media/zs/MG ZS官網網頁_儀表板_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
                  },
                  {
                    title: "還在苦惱人生？我們幫你看透一切", // Placeholder - Update with ZS specific text
                    desc: "搭載360°環景影像輔助系統，利用環繞車身周遭的鏡頭，於觸控螢幕中顯示車輛環視畫面，讓駕駛對車身周遭環境一目了然，停車更能一步到位。", // Placeholder - Update with ZS specific text
                    image: "/media/zs/MG-ZS官網網頁_360環景_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
                  },
                  {
                    title: "怕熱嗎？來點涼的吧", // Placeholder - Update with ZS specific text
                    desc: "最貼心的後座冷氣出風口，讓車內所有人都能享受舒適乘坐品質。",
                    image: "/media/zs/MG ZS官網網頁_出風口_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
                  },
                ]}
              />
              <DesignSectionTitle>醒目神采 當然藏不住</DesignSectionTitle>
              <GalleryWithTextType1
                slides={[
                  {
                    title: "銀石之翼LED頭燈", // Placeholder - Update with ZS specific text
                    desc: "設計理念源自英國銀石賽道，勾勒出羽翼線條，銳利注視前方一切事物。", // Placeholder - Update with ZS specific text
                    image: "/media/zs/MG ZS官網網頁_頭燈_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
                  },
                  {
                    title: "光羽LED尾燈", // Placeholder - Update with ZS specific text
                    desc: "精緻燈體組成俐落光帶，外型有如羽翼展開，與頭燈設計相互襯托，在夜間清晰可視。", // Placeholder - Update with ZS specific text
                    image: "/media/zs/MG-ZS官網網頁_尾燈_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
                  },
                  {
                    title: "黑曜矩陣水箱護罩", // Placeholder - Update with ZS specific text
                    desc: "蜂巢格柵均衡排列，藉由凹凸呈現如波浪般的反射，展現低調內斂的絕佳質感。", // Placeholder - Update with ZS specific text
                    image: "/media/zs/水箱護罩_FA_0831修改.webp", // Placeholder - Update with ZS specific image
                  },
                  {
                    title: "17吋銀黑切削鋁圈", // Placeholder - Update with ZS specific text
                    desc: "雙色切削勾勒線條，輔以亮黑烤漆打底，動靜之間皆展現個人風格。", // Placeholder - Update with ZS specific text
                    image: "/media/zs/MG ZS官網網頁_輪圈_PC_1920x1080.webp", // Placeholder - Update with ZS specific image
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
                        "/media/zs/accordion/MG-ZS官網網頁_天窗_PC_810x455.webp",
                    },
                    {
                      title: "霧銀風格飾件",
                      content: [
                        "流線風格線條搭配霧銀飾件，處處都展現內斂細節。",
                      ],
                      image:
                        "/media/zs/accordion/MG-ZS官網網頁_霧銀風格套件_PC_810x455.webp",
                    },
                  ]}
                />
              </DetailSectionWrapper>
            </>
          ) : item.anchor === "tech_cockpit" ? (
            <>
              <ContextualImageWrapper>
                <ContextualImage
                  src="/media/zs/MG-ZS官網網頁_內裝_PC_1920x850.webp"
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
                        "/media/zs/accordion/MG-ZS官網網頁_皮質座椅_PC_810x455.webp",
                    },
                    {
                      title: "多功能數位儀表",
                      content: [
                        "行車資訊清晰的數位儀表配置，彙整車輛、油耗、電壓及四輪獨立TPMS胎壓數值，提供高辨識度的科技體驗，同時提升用車安全",
                      ],
                      image:
                        "/media/zs/accordion/MG-ZS官網網頁_數位化駕駛儀表_PC_810x455.webp",
                    },
                    {
                      title: "EPB電子手煞車 / Auto Hold智慧自動駐車功能",
                      content: [
                        "停車不必手忙腳亂，兼具Auto Hold智慧自動駐車功能讓走走停停更加從容。",
                      ],
                      image:
                        "/media/zs/accordion/MG-ZS官網網頁_0816_電子手煞車_PC_810x455.webp",
                    },
                    {
                      title: "Keyless Entry & Push Start 啟閉系統",
                      content: [
                        "在不使用傳統金屬鑰匙的情況下，輕鬆完成車輛的解鎖、上鎖、啟動和關閉等操作。",
                      ],
                      image:
                        "/media/zs/accordion/MG-ZS官網網頁_keyless_PC_810x455.webp",
                    },
                  ]}
                />
              </DetailSectionWrapper>
            </>
          ) : item.anchor === "mobility_experience" ? ( // Create mobility_experience section
            <>
              <ContextualImageWrapper>
                <ContextualImage
                  src="/media/zs/MG-ZS官網網頁_0817_路跑頁_PC_1920x850.webp"
                  alt="ZS Contextual Image"
                />
                <OverlayText>
                  動力搭載1.5L
                  DVVT雙連續可變汽門正時汽油引擎，搭配可模擬8速手自排的CVT無段變速系統，為駕駛帶來輸出順暢且節能的輕鬆移動體驗
                </OverlayText>
              </ContextualImageWrapper>
            </>
          ) : item.anchor === "large_space" ? ( // Create large_space section
            <>
              <SpaceCarouselWrapper>
                <Carousel
                  slides={[
                    {
                      image: "/media/zs/MG-ZS官網網頁_後座-4_PC_1920x700.webp",
                      h1: "448L行李廂空間",
                      p: "放得進想放的，裝得下想裝的，充足空間自由運用。",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_後座-3_PC_1920x700.webp",
                      h1: "行李廂底板空間擴增設計",
                      p: "行李廂空間平整化設計，需要時也能移動底板向下調整，增加置物高度，擴增後空間可達528L。",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_後座-1_PC_1920x700.webp",
                      h1: "後車廂靈活運用",
                      p: "後車廂提供靈活的運用空間，需要時可以將座椅靈活運用，讓空間利用最大化，座椅全傾倒後空間可達1,375L。",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_後座-2_PC_1920x700.webp",
                      h1: "後排座椅6/4分離椅背設計",
                      p: "後座椅背能以6/4分離傾倒，依照不同需求提供最具靈活性的空間變化。",
                    },
                  ]}
                  dotsClassName="carousel-dots"
                  bottomLeftClassName="carousel-bottom-left"
                />
              </SpaceCarouselWrapper>
            </>
          ) : item.anchor === "safety_protection" ? ( // Create safety_protection section
            <>
              <ContextualImageWrapper>
                <ContextualImage
                  src="/media/zs/MG-ZS官網網頁_封底_PC_1920x850.webp" // Placeholder - Update with ZS specific safety image
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
                      image: "/media/zs/MG-ZS官網網頁_TJA_PC_1920x850.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "TJA 交通壅塞輔助",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_ACC_PC_1920x850.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "ACC 智慧型全速域主動車距巡航控制系統 (附 Stop & Go)",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_LKA_PC_1920x850.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: " LKA車道保持輔助系統",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_AEB_PC_1920x850.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "AEB 自動緊急剎車輔助系統",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/zs/MG-ZS官網網頁_BSD_PC_1920x850.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "BSD盲點偵測系統",
                      buttonText: "了解更多",
                    },
                  ]}
                  dotsClassName="carousel-dots"
                  bottomLeftClassName="carousel-bottom-left"
                />
              </SafetyCarouselWrapperStyled>
            </>
          ) : item.anchor === "related_information" ? ( // Create related_information section
            <>
              {" "}
              {/* Changed from <SectionAnchor> to Fragment */}
              <DesignSectionTitle>相關情報</DesignSectionTitle>
              <GalleryWithTextType3
                slides={[
                  {
                    title: "MG驚喜禮馭  只為你",
                    desc: "現在賞車試乘，獻上精選限定好禮",
                    image: "/media/zs/驚喜篇 PC 1920x1080.webp",
                    link: "/events",
                    buttonText: "查看活動",
                    additionalInfo: {
                      paragraph1: "「MG 質感好禮」",
                      listItems: [
                        "🎁 賞車禮：MG 100週年杯墊 ",
                        "🎁 試乘禮：MG 時尚皮革修容組",
                        "🎁 訂車禮：百週年時光禮盒 ",
                        "🎁 交車禮：模型車 及 Morii 玩偶 ",
                      ],
                      paragraph2:
                        "*贈品實際樣式與顏色依現場為準，數量有限，送完為止",
                    },
                  },
                  {
                    title: "ZS車主 橙萱",
                    desc: "當初因HS的出色外型在心中留下深刻的印象，得知MG正在招聘業代時，毅然決然地轉換跑道！曾經從台南北上新竹協助客人領牌，車程中全速域ACC&LKA車道置中的協助，大幅降低駕駛疲勞，ZS還有許多隱藏的貼心設計..",
                    image: "/media/zs/MG官網banner_0226_(PC)1920x1080_5.webp",
                    link: "/owner-stories",
                    buttonText: "觀看完整故事",
                  },
                ]}
              />
            </>
          ) : item.anchor === "specifications" ? ( // Create specifications section
            <>
              <VehicleSpecSheet vehicleData={zsSpecData} />
              <DetailedVehicleSpecs
                trimOptions={Object.keys(zsDetailedSpecs).map((trimName) => ({
                  label: trimName,
                  value: trimName,
                }))}
                detailedSpecsData={zsDetailedSpecs}
              />
              <div id="next-step-form">
                <NextStepForm backgroundImage="/media/zs/首頁_SimpleForm_背景圖.webp" />
              </div>
              {/* StickyBar 僅在非fixed狀態下插入這裡 */}
              {!stickyBarFixed && (
                <StickyBar
                  footerId="footer"
                  nextStepFormId="next-step-form"
                  fixed={false}
                />
              )}
            </>
          ) : null}
        </SectionAnchor>
      ))}
      {/* StickyBar 預設sticky渲染在最外層 */}
      {stickyBarFixed && (
        <StickyBar
          footerId="footer"
          nextStepFormId="next-step-form"
          fixed={true}
        />
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
          name: "炫彩藍",
          hex: "#0000FF",
          imageSrc: "/media/zs/MG ZS官網_BLUE_FA.webp", // Placeholder - Update with ZS specific image
          swatchSrc: "/media/zs/ZS_官網車色-blue.webp", // Placeholder - Update with ZS specific image
        },
        {
          name: "炫彩橘",
          hex: "#FF7F50",
          imageSrc: "/media/zs/2023_ZS_Orange_FA.webp", // Placeholder - Update with ZS specific image
          swatchSrc: "/media/zs/ZS_官網車色-orange.webp", // Placeholder - Update with ZS specific image
        },
        {
          name: "亮眼銀",
          hex: "#C0C0C0",
          imageSrc: "/media/zs/2023_ZS_Silver_FA.webp", // Placeholder - Update with ZS specific image
          swatchSrc: "/media/zs/ZS_官網車色-silver.webp", // Placeholder - Update with ZS specific image
        },
        {
          name: "電掣白",
          hex: "#FFFFFF",
          imageSrc: "/media/zs/2023_ZS_White_FA.webp", // Placeholder - Update with ZS specific image
          swatchSrc: "/media/zs/ZS_官網車色-white.webp", // Placeholder - Update with ZS specific image
        },
        {
          name: "鋼鐵黑",
          hex: "#000000",
          imageSrc: "/media/zs/2023_ZS_Black_FA.webp", // Placeholder - Update with ZS specific image
          swatchSrc: "/media/zs/ZS_官網車色-black.webp", // Placeholder - Update with ZS specific image
        },
        // Add other ZS colors
      ],
      equipment: {
        column1: [
          "MG PILOT 2.0 LV.2 智慧駕駛輔助",
          "ACC智慧型主動車距巡航控制系統",
          "TJA交通壅塞輔助系統",
          "LKA車道保持輔助系統",
          "SAS智能速限輔助系統",
          "AEB自動緊急煞車輔助系統",
          "IHC遠近光燈自動調節系統",
          "BSD盲點偵測系統",
          "360°環景影像輔助系統",
          "6SRS安全輔助氣囊",
          "ESP車身穩定控制系統",
          "TCS循跡防滑控制系統",
          "HDC陡坡緩降控制系統",
          "HSA陡坡起步輔助系統",
        ],
        column2: [
          "賽道之眼LED大燈/LED尾燈",
          "12.3吋數位儀表",
          "10.1吋懸浮式觸控螢幕",
          "256色環艙氣氛燈",
          "Keyless Entry & Push Start",
          "雙區恆溫空調",
          "手機無線充電",
          "一體式賽車座椅",
          "駕駛座六向電動座椅",
          "Trophy套件組",
          "智慧防夾電動尾門",
          "沉浸式全景天窗",
          "18吋燻黑雙色鋁圈",
          "Drive Mode多重駕駛模式",
        ],
      },
      basicSpecs: [
        { label: "長*寬*高(mm)", value: "4,323*1,809*1,653" }, // Example spec - Update with ZS specific data
        { label: "軸距(mm)", value: "2,585" }, // Example spec - Update with ZS specific data
        {
          label: "引擎型式:",
          value: "1.5L DVVT雙連續可變汽門正時汽油引擎", // Example spec - Update with ZS specific data
        },
        {
          label: "變速箱系統:",
          value: "CVT無段變速系統(附模擬8速手自排)", // Example spec - Update with ZS specific data
        },
        { label: "驅動系統", value: "前輪驅動" },
        {
          label: "懸吊系統(前/後):",
          value: "麥花臣式附防傾桿/扭力樑式", // Example spec - Update with ZS specific data
        },
        { label: "最大馬力(ps/rpm)", value: "120/6,000" }, // Example spec - Update with ZS specific data
        { label: "最大扭力(kg-m/rpm)", value: "15.3/4,500" }, // Example spec - Update with ZS specific data
      ],
      specImages: {
        main: {
          src: "/media/zs/MG-MG ZS官網_BLUE_FA.webp", // Placeholder - Update with ZS specific image
          alt: "ZS 1.5L 旗艦版",
        },
        dimensionsDisplayImage: {
          desktopSrc: "/media/zs/MG-ZS官網網頁_三視圖_PC-1440x375_黑.webp", // Existing desktop image
          mobileSrc: "/media/zs/MG-ZS官網網頁_三視圖_MB-750x1920_藍.webp", // New mobile image
          alt: "ZS 1.5L 旗艦版 車輛尺寸",
        },
      },
      bookingLink: "https://www.mgmotor.com.tw/testdrive.html",
      onlineOrderLink: "https://www.mgmotor.com.tw/order.html",
    },
  ],
};

export default ZSPage;
