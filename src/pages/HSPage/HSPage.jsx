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
} from "./styles";
import { useRef, useState } from "react";
import GalleryWithText from "../../components/GalleryWithText/GalleryWithText";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "../../components/Carousel/Carousel";

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
  const sectionRefs = NAV_ITEMS.map(() => useRef(null));

  const handleNavClick = (idx) => {
    setActiveIdx(idx);
    sectionRefs[idx].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="hs-page">
      <HeroImageWrapper>
        <HeroImage
          src="/media/hs/MG HS 限定版車型頁Banner - PC 1920x480.jpg"
          alt="HS Hero"
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
      {NAV_ITEMS.map((item, idx) => (
        <SectionAnchor
          key={item.anchor}
          id={item.anchor}
          ref={sectionRefs[idx]}
        >
          {item.anchor === "design" ? (
            <>
              <DesignSectionTitle>運動是本能，更是顯性基因</DesignSectionTitle>
              <GalleryWithText
                slides={[
                  {
                    title: "直瀑式水箱護罩",
                    desc: "水箱護罩採用燻黑塗裝，大面積直瀑式倒扣線條充滿力道，呈現匯聚向上的流動形態，與前擾流保桿一起營造出動態般的前傾狩獵感。",
                    image: "/media/hs/車款介紹頁_HS_水箱護罩_PC.jpg",
                  },
                  {
                    title: "賽道之眼LED頭燈組",
                    desc: "全新LED頭燈組，採用漸進式序列設計，搭配日行燈眉點綴，炯炯有神注視前方。",
                    image: "/media/hs/車款介紹頁_HS_頭燈組_PC.jpg",
                  },
                  {
                    title: "立體式聚能LED尾燈",
                    desc: "尾燈由95顆LED匯聚組成，上揚角度與頭燈前後呼應，視覺紮實飽滿，立體感十足。",
                    image: "/media/hs/車款介紹頁_HS_尾燈_PC.jpg",
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
                        "/media/hs/accordion/車款介紹頁_Accordion__HS_行李架_PC.jpg",
                    },
                    {
                      title: "鍍鉻雙出尾管",
                      content: [
                        "搭配鍍鉻雙出尾管與後保桿合為一體，凸顯運動性格。",
                      ],
                      image:
                        "/media/hs/accordion/車款介紹頁_Accordion__HS_尾管_PC.jpg",
                    },
                    {
                      title: "智慧防夾電動尾門",
                      content: [
                        "防夾電動尾門，可以輕鬆啟閉不費力，可利用中央觸控螢幕與尾廂按鈕能輕鬆調整尾門高度，貼心人性化的設計適合家中每一位成員使用。",
                      ],
                      image: "/media/hs/accordion/車款介紹頁_HS_尾門_PC.jpg",
                    },
                    {
                      title: "18吋燻黑輪框內搭運動卡鉗",
                      content: [
                        "HS 1.5T 旗艦版車型上的燻黑風格輪殼總令人注目，細幅條設計更加簡潔且俐落，搭配紅色卡鉗，更體現運動風格。",
                      ],
                      image:
                        "/media/hs/accordion/車款介紹頁_Accordion_HS_輪框_PC.jpg",
                    },
                    {
                      title: "19吋戰斧式輪框內搭運動卡鉗",
                      content: [
                        "HS 2.0T AWD旗艦版車型配備 19 吋戰斧式輪框內搭運動卡鉗，旋動的細輻條設計，凸顯輪框張力，中央區域採用亮黑色塗裝，強化了輕量感，搭配紅色運動卡鉗，更加體驗運動化設計細節。",
                      ],
                      image:
                        "/media/hs/accordion/車款介紹頁_ACCORDION_HS 2.0T_輪框_PC.jpg",
                    },
                    {
                      title: "【馭風前行版限定】風格側裙 ",
                      content: [
                        "動感流線設計，勾勒剽悍線條，雕刻出力量與美學的平衡，展現更具賽道基因的運動風範。",
                      ],
                      image:
                        "/media/hs/accordion/MG HS 限定版_側裙_810X455.jpg",
                    },
                    {
                      title: "【馭風前行版限定】風行碟盤",
                      content: [
                        "前後配備打孔通風碟盤，提升煞車系統冷卻效率，即使長途巡航或激烈操駕，都能保持穩定制動，從容掌控每段熱血旅程。",
                      ],
                      image:
                        "/media/hs/accordion/MG HS 限定版_碟盤_810X455.jpg",
                    },
                    {
                      title: "【馭風前行版限定】風馳尾翼 ",
                      content: [
                        "流線立體尾翼設計，強化車尾視覺張力，層次分明的造型語彙，低調卻藏不住跑格氣場，每次轉身、每段行進，盡顯馳騁風範。",
                      ],
                      image:
                        "/media/hs/accordion/MG HS 限定版_尾翼_810X455.jpg",
                    },
                  ]}
                />
              </DetailSectionWrapper>
            </>
          ) : item.anchor === "power" ? (
            <>
              <PowerImage
                src="/media/hs/車款介紹頁_PC_HS 2.0T動力.jpg"
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
                        "/media/hs/accordion/MG2.0官網_PC810x455_AWD銘版.jpg",
                    },
                    {
                      title: "MEGA Tech 1.5T / 2.0T渦輪增壓引擎 ",
                      content: [
                        "採用MEGA Tech 渦輪增壓引擎搭配 GDI 高壓燃油直噴技術，有效促進燃燒帶來強悍動力表現，更在低轉速時提供全扭力輸出表現，滿足對於動力性能的渴望。",
                      ],
                      image:
                        "/media/hs/accordion/MG2.0官網_PC810x455_引擎1..jpg",
                    },
                    {
                      title: "MEGA Tech 6 速 / 7速 DCT 雙離合器變速箱",
                      content: [
                        "透過雙離合器變速系統，分別控制奇數檔與偶數檔，可讓動力傳遞更為直接，換檔速度更為迅速，並採用低黏度性潤滑油，提升傳動效率和平順性。",
                      ],
                      image:
                        "/media/hs/accordion/MG2.0官網_PC810x455_引擎2.jpg",
                    },
                    {
                      title: "Drive Mode多重駕駛模式",
                      content: [
                        "按下Super Sport按鈕，你將感受由內而外的熱血變化，引擎動力爆發湧現，換檔銜接速度更快、方向盤轉向更沉穩，也隨之喚醒，體內的另一個自我。",
                        "動力模式：Eco Mode / Normal Mode / Sport Mode / Super Sport Mode / Custom Mode",
                      ],
                      image: "/media/hs/accordion/MG2.0官網_PC810x455_鈕.jpg",
                    },
                    {
                      title: "精校獨立懸吊系統",
                      content: [
                        "採用前麥花臣、後多連桿獨立懸吊系統，有效強化輪胎貼地性表現，在高速過彎時有效提升駕駛穩定性。搭載德國SACHS避震器，經過精細調校，更加安穩並抑制側傾，打造出高級行路質感。",
                      ],
                      image: "/media/hs/accordion/MG2.0官網_PC810x455_動力.jpg",
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
                      image: "/media/hs/品牌介紹頁_Teaser_PC_創新科技入口.jpg",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "MG PILOT 2.0 Level 2 智慧駕駛輔助",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/hs/車款介紹頁_ACC_PC.jpg",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "ACC 智慧型全速域主動車距巡航控制系統 (附 Stop & Go)",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/hs/車款介紹頁_AEB_PC.jpg",
                      link: "https://www.mgmotor.com.tw/configuration/hs.html",
                      h1: "AEB自動緊急煞車輔助系統",
                      buttonText: "了解更多",
                    },
                    {
                      image: "/media/hs/車款介紹頁_LKA_PC.jpg",
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
                  src="/media/hs/車款介紹頁_被動安全_PC.jpg"
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
          ) : null}
        </SectionAnchor>
      ))}
    </div>
  );
};

export default HSPage;
