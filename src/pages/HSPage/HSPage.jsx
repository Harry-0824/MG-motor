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
  ExperienceTextWrapper,
  ExperienceCarouselWrapperStyled,
} from "./styles";
import React, { useRef, useState, useEffect } from "react";
import { getTrimsByModel } from "../../services/api";
import {
  GalleryWithTextType1,
  GalleryWithTextType2,
} from "../../components/GalleryWithText/GalleryWithText";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "../../components/Carousel/Carousel";
import VehicleSpecSheet from "../../components/VehicleSpecSheet/VehicleSpecSheet";
import DetailedVehicleSpecs from "../../components/DetailedVehicleSpecs/DetailedVehicleSpecs";
import NextStepForm from "../../components/NextStepForm/NextStepForm";
import StickyBar from "../../components/StickyBar/StickyBar";

const NAV_ITEMS = [
  { label: "流線運動風格", anchor: "design" },
  { label: "智能動力系統", anchor: "power" },
  { label: " 極致安全守護", anchor: "safety" },
  { label: "沉浸完美體驗", anchor: "experience" },
  { label: "相關情報", anchor: "info" },
  { label: "規格", anchor: "spec" },
];

const HSPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [stickyBarFixed, setStickyBarFixed] = useState(true);
  const [hsSpecData, setHsSpecData] = useState(null);
  const [hsDetailedSpecs, setHsDetailedSpecs] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const navRef = useRef(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const sectionRefs = useRef(NAV_ITEMS.map(() => React.createRef()));

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const trims = await getTrimsByModel("hs");
        console.log("Fetched HS trims:", trims);
        if (trims && trims.length > 0) {
          // Map backend trims to the expected format for VehicleSpecSheet
          const formattedSpecData = {
            modelName: "MG HS",
            trims: trims.map(t => ({
              name: t.name,
              price: t.price_display,
              basicSpecs: t.basic_specs_json,
              specImages: { main: { src: t.main_image, alt: t.name } },
              disclaimer: t.disclaimer,
              bookingLink: t.booking_link,
              onlineOrderLink: t.online_order_link,
              // Note: colors and equipment might need more backend fields later
              colors: [], 
              equipment: { column1: [], column2: [] }
            }))
          };
          setHsSpecData(formattedSpecData);

          // Map backend trims to the expected format for DetailedVehicleSpecs
          const formattedDetailedSpecs = {};
          trims.forEach(t => {
            formattedDetailedSpecs[t.name] = t.detailed_specs_json;
          });
          setHsDetailedSpecs(formattedDetailedSpecs);
        }
      } catch (error) {
        console.error("Failed to fetch HS data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicleData();
  }, []);

  const handleNavClick = (idx) => {
    setActiveIdx(idx);
    sectionRefs.current[idx].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
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

    window.addEventListener("scroll", handleWindowScroll);
    handleWindowScroll();

    const currentNavRef = navRef.current;
    if (currentNavRef) {
      currentNavRef.addEventListener("scroll", handleNavScroll);
      handleNavScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      if (currentNavRef) {
        currentNavRef.removeEventListener("scroll", handleNavScroll);
      }
    };
  }, []);

  return (
    <div className="hs-page">
      <HeroImageWrapper>
        <HeroImage
          src={
            window.innerWidth <= 500
              ? "/media/hs/HS 1.5T MAX KV_MB_750x800.webp"
              : "/media/hs/MG HS 限定版車型頁Banner - PC 1920x480.webp"
          }
          alt="HS Hero"
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
            $active={activeIdx === idx}
            onClick={() => handleNavClick(idx)}
          >
            {item.label}
          </HeroNavItem>
        ))}
      </HeroNavBar>
      {/* 對應區塊錨點 */}
      {NAV_ITEMS.map((item, idx) => (
        <SectionAnchor
          key={item.anchor}
          id={item.anchor}
          ref={sectionRefs.current[idx]}
        >
          {item.anchor === "design" ? (
            <>
              <DesignSectionTitle>運動是本能，更是顯性基因</DesignSectionTitle>
              <GalleryWithTextType1
                slides={[
                  {
                    title: "直瀑式水箱護罩",
                    desc: "水箱護罩採用燻黑塗裝，大面積直瀑式倒扣線條充滿力道，呈現匯聚向上的流動形態，與前擾流保桿一起營造出動態般的前傾狩獵感。",
                    image: "/media/hs/車款介紹頁_HS_水箱護罩_PC.webp",
                  },
                  {
                    title: "賽道之眼LED頭燈組",
                    desc: "全新LED頭燈組，採用漸進式序列設計，搭配日行燈眉點綴，炯炯有神注視前方。",
                    image: "/media/hs/車款介紹頁_HS_頭燈組_PC.webp",
                  },
                  {
                    title: "立體式聚能LED尾燈",
                    desc: "尾燈由95顆LED匯聚組成，上揚角度與頭燈前後呼應，視覺紮實飽滿，立體感十足。",
                    image: "/media/hs/車款介紹頁_HS_尾燈_PC.webp",
                  },
                ]}
              />
              <DetailSectionWrapper>
                <DetailSectionTitle>精緻細節設計</DetailSectionTitle>
                <Accordion
                  items={[
                    {
                      title: "燻黑行李架",
                      content: ["車頂一體式行李架使用燻黑塗裝，強化運動氛圍。"],
                      image:
                        "/media/hs/accordion/車款介紹頁_Accordion__HS_行李架_PC.webp",
                    },
                    {
                      title: "鍍鉻雙出尾管",
                      content: [
                        "搭配鍍鉻雙出尾管與後保桿合為一體，凸顯運動性格。",
                      ],
                      image:
                        "/media/hs/accordion/車款介紹頁_Accordion__HS_尾管_PC.webp",
                    },
                    {
                      title: "智慧防夾電動尾門",
                      content: [
                        "防夾電動尾門，可以輕鬆啟閉不費力，可利用中央觸控螢幕與尾廂按鈕能輕鬆調整尾門高度，貼心人性化的設計適合家中每一位成員使用。",
                      ],
                      image: "/media/hs/accordion/車款介紹頁_HS_尾門_PC.webp",
                    },
                    {
                      title: "18吋燻黑輪框內搭運動卡鉗",
                      content: [
                        "HS 1.5T 旗艦版車型上的燻黑風格輪殼總令人注目，細幅條設計更加簡潔且俐落，搭配紅色卡鉗，更體現運動風格。",
                      ],
                      image:
                        "/media/hs/accordion/車款介紹頁_Accordion_HS_輪框_PC.webp",
                    },
                    {
                      title: "19吋戰斧式輪框內搭運動卡鉗",
                      content: [
                        "HS 2.0T AWD旗艦版車型配備 19 吋戰斧式輪框內搭運動卡鉗，旋動的細輻條設計，凸顯輪框張力，中央區域採用亮黑色塗裝，強化了輕量感，搭配紅色運動卡鉗，更加體驗運動化設計細節。",
                      ],
                      image:
                        "/media/hs/accordion/車款介紹頁_ACCORDION_HS 2.0T_輪框_PC.webp",
                    },
                    {
                      title: "【馭風前行版限定】風格側裙 ",
                      content: [
                        "動感流線設計，勾勒剽悍線條，雕刻出力量與美學的平衡，展現更具賽道基因的運動風範。",
                      ],
                      image:
                        "/media/hs/accordion/MG HS 限定版_側裙_810X455.webp",
                    },
                    {
                      title: "【馭風前行版限定】風行碟盤",
                      content: [
                        "前後配備打孔通風碟盤，提升煞車系統冷卻效率，即使長途巡航或激烈操駕，都能保持穩定制動，從容掌控每段熱血旅程。",
                      ],
                      image:
                        "/media/hs/accordion/MG HS 限定版_碟盤_810X455.webp",
                    },
                    {
                      title: "【馭風前行版限定】風馳尾翼 ",
                      content: [
                        "流線立體尾翼設計，強化車尾視覺張力，層次分明的造型語彙，低調卻藏不住跑格氣場，每次轉身、每段行進，盡顯馳騁風範。",
                      ],
                      image:
                        "/media/hs/accordion/MG HS 限定版_尾翼_810X455.webp",
                    },
                  ]}
                />
              </DetailSectionWrapper>
            </>
          ) : item.anchor === "power" ? (
            <>
              <PowerImage
                src="/media/hs/車款介紹頁_PC_HS 2.0T動力.webp"
                alt="智能動力系統"
              />
              <PowerAccordionWrapper>
                <Accordion
                  items={[
                    {
                      title: "AWD 智能四驅系統 (Lock 鎖定功能)",
                      content: [
                        "HS 2.0T AWD旗艦版車型搭載 AWD 智能四驅系統，無論在濕滑、泥濘、雪地..等非平整路面， AWD 智能四驅系統將持續偵測，可於0.1秒內智慧切換前輪驅動或四輪驅動，強化車輪抓地力，使車輛達到最佳循跡表現，提供駕駛更安心、更精準操控體驗。",
                        "結合 Lock 可鎖定功能可在時速 60km 以內，強制切換四輪驅動系統，應付相對惡劣的Off-Road路況。",
                      ],
                      image:
                        "/media/hs/accordion/MG2.0官網_PC810x455_AWD銘版.webp",
                    },
                    {
                      title: "MEGA Tech 1.5T / 2.0T渦輪增壓引擎 ",
                      content: [
                        "採用MEGA Tech 渦輪增壓引擎搭配 GDI 高壓燃油直噴技術，有效促進燃燒帶來強悍動力表現，更在低轉速時提供全扭力輸出表現，滿足對於動力性能的渴望。",
                      ],
                      image:
                        "/media/hs/accordion/MG2.0官網_PC810x455_引擎1..webp",
                    },
                    {
                      title: "MEGA Tech 6 速 / 7速 DCT 雙離合器變速箱",
                      content: [
                        "透過雙離合器變速系統，分別控制奇數檔與偶數檔，可讓動力傳遞更為直接，換檔速度更為迅速，並採用低黏度性潤滑油，提升傳動效率和平順性。",
                      ],
                      image:
                        "/media/hs/accordion/MG2.0官網_PC810x455_引擎2.webp",
                    },
                    {
                      title: "Drive Mode多重駕駛模式",
                      content: [
                        "按下Super Sport按鈕，你將感受由內而外的熱血變化，引擎動力爆發湧現，換檔銜接速度更快、方向盤轉向更沉穩，也隨之喚醒，體內的另一個自我。",
                        "動力模式：Eco Mode / Normal Mode / Sport Mode / Super Sport Mode / Custom Mode",
                      ],
                      image: "/media/hs/accordion/MG2.0官網_PC810x455_鈕.webp",
                    },
                    {
                      title: "精校獨立懸吊系統",
                      content: [
                        "採用前麥花臣、後多連桿獨立懸吊系統，有效強化輪胎貼地性表現，在高速過彎時有效提升駕駛穩定性。搭載德國SACHS避震器，經過精細調校，更加安穩並抑制側傾，打造出高級行路質感。",
                      ],
                      image:
                        "/media/hs/accordion/MG2.0官網_PC810x455_動力.webp",
                    },
                  ]}
                />
              </PowerAccordionWrapper>
            </>
          ) : item.anchor === "safety" ? (
            <SafetySectionWrapper>
              <SafetyCarouselWrapperStyled>
                <Carousel
                  slides={[
                    {
                      image: "/media/hs/品牌介紹頁_Teaser_PC_創新科技入口.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "MG PILOT 2.0 Level 2 智慧駕駛輔助",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/hs/車款介紹頁_ACC_PC.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "ACC 智慧型全速域主動車距巡航控制系統 (附 Stop & Go)",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/hs/車款介紹頁_AEB_PC.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "AEB自動緊急煞車輔助系統",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/hs/車款介紹頁_LKA_PC.webp",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "LKA車道維持輔助系統",
                      buttonText: "了解更多",
                    },
                  ]}
                  dotsClassName="carousel-dots"
                  bottomLeftClassName="carousel-bottom-left"
                />
              </SafetyCarouselWrapperStyled>
              <SafetyImageBlock>
                <SafetyImage
                  src="/media/hs/車款介紹頁_被動安全_PC.webp"
                  alt="安全守護"
                />
                <SafetyText>
                  車身結構使用大量高強度鋼材，在A/B柱等重點結構更是1500MPa以上超高强度鋼材，四門均以斜列防撞鋼樑設計來提升強度，強化車身抗扭曲剛性。以人為本的思考，把車內所有人的安全擺在第一位，將安全守護做到極致。
                </SafetyText>
                <SafetyText>
                  搭載雙前座SRS輔助氣囊、雙前座側邊SRS輔助氣囊、雙車側簾幕式SRS輔助氣簾，全面嚴密保護，讓駕駛與乘客安心享受每趟旅程。
                </SafetyText>
              </SafetyImageBlock>
            </SafetySectionWrapper>
          ) : item.anchor === "experience" ? (
            <>
              {/* 將 Carousel 包裹在 ExperienceCarouselWrapperStyled 中 */}
              <ExperienceCarouselWrapperStyled>
                <Carousel
                  slides={[
                    {
                      // 預留給您的內容
                      image: "/media/hs/車款介紹頁_HS_大內裝_PC.webp", // 佔位圖片
                      h1: "跑 或不跑，都是同樣的迷人",
                    },
                    {
                      // 預留給您的內容
                      image: "/media/hs/車款介紹頁_HS_座椅_PC.webp", // 佔位圖片
                      h1: "跑 或不跑，都是同樣的迷人",
                    },
                    {
                      // 預留給您的內容
                      image: "/media/hs/車款介紹頁_HS_情境圖_PC.webp", // 佔位圖片
                      h1: "跑 或不跑，都是同樣的迷人",
                    },
                  ]}
                  dotsClassName="carousel-dots"
                  bottomLeftClassName="carousel-bottom-left"
                />
              </ExperienceCarouselWrapperStyled>
              {/* 將 div 替換為 ExperienceTextWrapper */}
              <ExperienceTextWrapper>
                <p>
                  質感這東西，是會讓人沉迷的，你將沉迷於坐在一體式賽車座椅上，感受256色環艙氣氛燈創造的氛圍，思考著下一站。但也或許，移動才是你的方向。
                </p>
              </ExperienceTextWrapper>
              {/* Change to use GalleryWithTextType1 (or Type2 if preferred) */}
              <GalleryWithTextType1
                slides={[
                  {
                    title: "沉浸式全景天窗",
                    desc: "同級罕見超大型全景天窗，面積高達1.19平方公尺，讓車室空間備感敞亮，盡情享受天際風光，並搭配電動遮陽簾，自由調節光線進入。",
                    image: "/media/hs/車款介紹頁_HS_天窗_PC.webp", // 佔位圖片
                  },
                  {
                    title: "手機無線充電",
                    desc: "隨手放置即刻充電，全車搭配4個USB介面，滿足車上所有人的充電需求。",
                    image: "/media/hs/車款介紹頁_HS_充電_PC.webp", // 佔位圖片
                  },
                  {
                    title:
                      "10.1吋懸浮式觸控螢幕(標配Apple Carplay 與 Android Auto)",
                    desc: "人體工學搭配IPS廣視角設計，可視角度達170度，讓駕駛能直覺看到螢幕資料，保持視線於前方，維持行車安全，並採用低反光技術，讓使用者更加清晰閱讀。",
                    image: "/media/hs/車款介紹頁_HS_螢幕_PC.webp", // 佔位圖片
                  },
                  {
                    title: "12.3吋數位儀表",
                    desc: "搭載大面積數位儀表，能清楚呈現車輛多樣資訊，並在不同的駕駛模式下，可呈現不同的儀錶設計，能帶來不同的駕駛氛圍。同時儀錶板可自動感應環境光源調節背光，資訊隨時清晰可視。",
                    image: "/media/hs/車款介紹頁_HS_儀錶板_PC.webp", // 佔位圖片
                  },
                  {
                    title: "銀翼電子排檔桿",
                    desc: "握感舒適，操作隨心所欲，吸睛的造型如飛翔羽翼，打破傳統SUV的工具感，每次排檔的瞬間，都讓你感覺愉悅。",
                    image: "/media/hs/車款介紹頁_HS_排檔桿_PC.webp", // 佔位圖片
                  },
                ]}
              />
            </>
          ) : item.anchor === "info" ? (
            <>
              <GalleryWithTextType2
                slides={[
                  {
                    title: "MG驚喜禮馭  只為你",
                    desc: "現在賞車試乘，獻上精選限定好禮",
                    image: "/media/hs/驚喜篇 PC 1920x1080.webp",
                    buttonText: "立即預約",
                    buttonLink: "https://www.mgmotor.com.tw/testdrive.html",
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
                    title: "HS車主 徐先生&徐太太",
                    desc: "HS陪伴我成為車主將近2年，從牽車隔天的環島旅行，到忙碌的日常通勤，MG的主被動安全輔助，總能為我帶來安心感。",
                    image: "/media/hs/車主貼文_1920x1080.webp",
                    buttonText: "觀看完整故事",
                    buttonLink: "https://www.mgmotor.com.tw/stories/1", // 請更新為實際連結
                  },
                ]}
              />
            </>
          ) : item.anchor === "spec" ? (
            <>
              {loading ? (
                <div style={{ textAlign: "center", padding: "3rem" }}>規格資料載入中...</div>
              ) : hsSpecData && hsDetailedSpecs ? (
                <>
                  <VehicleSpecSheet vehicleData={hsSpecData} />
                  <DetailedVehicleSpecs
                    trimOptions={Object.keys(hsDetailedSpecs).map((trimName) => ({
                      label: trimName,
                      value: trimName,
                    }))}
                    detailedSpecsData={hsDetailedSpecs}
                  />
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "3rem" }}>暫無規格資料。</div>
              )}
              <div id="next-step-form">
                <NextStepForm backgroundImage="/media/hs/首頁_SimpleForm_背景圖.webp" />
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
      {/* StickyBar 預設fixed渲染在最外層 */}
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

export default HSPage;
