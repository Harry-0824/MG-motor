import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import {
  FlexRow,
  StyledSelect,
  StyledH1,
  HomeLinkButton,
  InfoSection,
  InfoBlock,
  InfoImage,
  InfoText,
  InfoTitle,
  InfoDesc,
  InfoSectionTitle,
  BannerSection,
  BannerTitle,
  BannerCarouselWrapper,
  BannerFormWrapper,
  BannerFormTitle,
  BannerForm,
  BannerInput,
  BannerButton,
  BannerBgImage,
  InfoMainTitle,
  InfoBackText,
  ActionRow,
} from "./styles";
import { desktopSlides, mobileSlides } from "../../data/home/slides";

const Home = () => {
  const [model, setModel] = useState("HS");
  const [slides, setSlides] = useState(desktopSlides);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setSlides(mobileSlides);
      } else {
        setSlides(desktopSlides);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">
      <Carousel slides={slides} />
      <FlexRow>
        <StyledH1>立即體驗 MG 駕駛樂趣</StyledH1>
        <ActionRow>
          <StyledSelect
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="HS">HS</option>
            <option value="ZS">ZS</option>
          </StyledSelect>
          <HomeLinkButton>
            預約試乘<span>&rarr;</span>
          </HomeLinkButton>
        </ActionRow>
      </FlexRow>
      <InfoSection>
        <InfoMainTitle>
          <InfoBackText>Always Beyond 誰說不可能</InfoBackText>
          <InfoSectionTitle>即刻認識MG</InfoSectionTitle>
        </InfoMainTitle>

        <InfoBlock bg="#f8f8f8" direction="row">
          <InfoImage
            src="/media/home/MG官網banner_0327_960x300(PC).webp"
            alt="主視覺"
            imgWidth="60%"
          />
          <InfoText textWidth="40%">
            <InfoTitle>Always Beyond 誰說不可能</InfoTitle>
            <InfoDesc>
              MG相信打破舊規則的挑戰者才是創造新規則的領先者！總是擁抱新事物，開創新道路，不止於思考，而是超越想像、付諸行動、持續自我進化的有機體。用最快的速度，追著自己跑，世界，應該在自己腳下；時代，應該由自己推進；價值，不由他人定義，而是由相信實現不可能的自己主宰！
            </InfoDesc>
          </InfoText>
        </InfoBlock>
        <InfoBlock bg="#dd7870" direction="row">
          <InfoImage
            src="/media/home/MG-ZS官網Resize_0904_官網首頁_車色路跑頁_960X300_PC.webp"
            alt="車款2"
          />
          <InfoText>
            <InfoTitle style={{ color: "#fff" }}>他們說你天生不一樣</InfoTitle>
            <InfoDesc style={{ color: "#fff" }}>
              MG ZS 天生出眾，改寫遊戲的規則，你的世界，有你自己的玩法。
            </InfoDesc>
          </InfoText>
        </InfoBlock>
        <InfoBlock bg="#4db6e7" direction="row-reverse">
          <InfoImage src="/media/home/0327_960x300.webp" alt="車款3" />
          <InfoText>
            <InfoTitle style={{ color: "#fff" }}>充滿細節的運動風格</InfoTitle>
            <InfoDesc style={{ color: "#fff" }}>
              MG
              HS全車系擁有極具衝擊力的前傾車頭，充滿運動感的車身流線，讓體內的不安分靈魂無比興奮。啟程吧！滿足所有駕馭需求，盡情享受迎來未來的快感。
            </InfoDesc>
          </InfoText>
        </InfoBlock>
        <InfoBlock bg="#dd7870" direction="row">
          <InfoImage src="/media/home/0327_960x300-1.webp" alt="車款4" />
          <InfoText>
            <InfoTitle style={{ color: "#fff" }}>
              遠離危險是人性，也是MG的天性
            </InfoTitle>
            <InfoDesc style={{ color: "#fff" }}>
              想像一個夥伴，它隨時全神貫注，為你眼觀八方，MG Pilot 2.0 Level 2
              智慧駕駛輔助，就能給你這樣的安全感。預知並感應危險，做出最即時的反應，避開危險發生，讓乘坐的人安心，同時能大幅降低長途駕駛疲勞感。
            </InfoDesc>
          </InfoText>
        </InfoBlock>
      </InfoSection>
      <BannerSection>
        <BannerTitle>放縱你的不羈，在質感堆疊的車室空間裡</BannerTitle>
        <BannerCarouselWrapper>
          <Carousel
            slides={[
              {
                image: "/media/home/首頁_Carousel_Teaser_ImageFull_PC_1.webp",
              },
              {
                image: "/media/home/首頁_Carousel_Teaser_ImageFull_PC_2.webp",
              },
              {
                image: "/media/home/首頁_Carousel_Teaser_ImageFull_PC_3.webp",
              },
              {
                image: "/media/home/首頁_Carousel_Teaser_ImageFull_PC_4.webp",
              },
              {
                image: "/media/home/首頁_Carousel_Teaser_ImageFull_PC_5.webp",
              },

              // 你可以自行加入更多圖片
            ]}
          />
        </BannerCarouselWrapper>
        <BannerFormWrapper>
          <BannerBgImage
            src="/media/home/首頁_Carousel_Teaser_ImageFull_PC_1.webp"
            alt="表單背景"
            className="cmc-image"
          />
          <BannerFormTitle>隨時收到最新的MG動態消息</BannerFormTitle>
          <BannerForm>
            <BannerInput placeholder="請輸入您的電子信箱" />
            <BannerButton type="submit">
              送出 <span>&rarr;</span>
            </BannerButton>
          </BannerForm>
        </BannerFormWrapper>
      </BannerSection>
    </div>
  );
};

export default Home;
