import React from "react";
import {
  HeroImageWrapper,
  HeroImage,
  AboutContent,
  AboutText,
  AboutFeatureSection,
  AboutFeatureBlock,
  AboutFeatureImage,
  AboutFeatureText,
  AboutFeatureTitle,
} from "./styles";
import Accordion from "../../components/Accordion/Accordion";
import BookingForm from "../../components/BookingForm/BookingForm";

const AboutPage = () => {
  return (
    <AboutContent className="about-page">
      {" "}
      <HeroImageWrapper>
        <HeroImage
          src={
            window.innerWidth <= 500
              ? "/media/about/carouselKV_top banner_MB.webp"
              : "/media/about/carouselKV_top banner_PC.webp"
          }
          alt="ZS Hero"
        />
      </HeroImageWrapper>
      <AboutContent>
        <h1>她是誰？</h1>
        <AboutText>她一路不被看好，被質疑是否還能站上巔峰。</AboutText>
        <AboutText>
          但她從未被「不可能」打敗，一次又一次，捧起大滿貫冠軍獎杯。
        </AboutText>
        <AboutText>
          那持續挑戰的精神就是 Always Beyond。如今，她的名字已被全世界記得。
        </AboutText>
        <AboutText>她是謝淑薇，她是MG 2025品牌代言人。</AboutText>
      </AboutContent>
      {/* 新增形象區塊 */}
      <AboutFeatureSection>
        {/* 左圖右文 */}
        <AboutFeatureBlock>
          <AboutFeatureImage
            src="/media/about/TeaserImage_謝淑薇故事01_PC.webp"
            alt="千變萬化的獨特打法"
          />
          <AboutFeatureText>
            <h2>千變萬化的獨特打法</h2>
            <p>
              謝淑薇5歲開始打球，因為當時力氣小，所以無論正手、反手，都使用雙手握拍，這個習慣延續至今。有人認為她非傳統的握拍方式，難以適應高強度比賽。但謝淑薇卻以此打出讓對手頭疼的「鬼之吊球」、「鬼之切球」，成了她的招牌武器，粉碎那些不可能的質疑。
            </p>
          </AboutFeatureText>
        </AboutFeatureBlock>
        {/* 右圖左文 */}
        <AboutFeatureBlock
          style={{
            flexDirection: window.innerWidth <= 500 ? "column" : "row-reverse",
          }}
        >
          <AboutFeatureImage
            src="/media/about/TeaserImage_謝淑薇故事02_PC.webp"
            alt="逆境之中奮戰到底"
          />
          <AboutFeatureText>
            <h2>逆境之中奮戰到底</h2>
            <p>
              傷病是運動員最大的阻礙。23年溫網，謝淑薇腳趾受傷，劇痛讓她一度想放棄比賽，但最終謝淑薇咬緊牙關，在醫師和防護員的協助下完成賽事，和搭檔一起拿下女雙冠軍，甚至還成為年齡總和最高的大滿貫女雙搭檔，實現不可能的挑戰。
            </p>
          </AboutFeatureText>
        </AboutFeatureBlock>
        {/* 左圖右文 */}
        <AboutFeatureBlock>
          <AboutFeatureImage
            src="/media/about/TeaserImage_謝淑薇故事03_PC.webp"
            alt="挑戰無限突破極限"
          />
          <AboutFeatureText>
            <h2>挑戰無限突破極限</h2>
            <p>
              2013年，謝淑薇打下生涯第一座大滿貫，11年後的澳網，38歲的謝淑薇成為首位囊括混雙、女雙冠軍的選手，也締造台灣網壇史上第一位在單屆賽事奪下兩座大滿貫的紀錄。同年溫網混雙奪冠，拿下生涯第9座大滿貫金盃，樹立新的「謝淑薇障礙」。而對她年紀增長巔峰不再的質疑，也不攻自破。
            </p>
          </AboutFeatureText>
        </AboutFeatureBlock>
        {/* 右圖左文 */}
      </AboutFeatureSection>
      <img
        src="/media/about/TeaserImage_KV_PC.webp"
        style={{ width: "100%", height: "auto" }}
        alt="謝淑薇"
      />
      <AboutFeatureSection>
        <AboutFeatureBlock>
          <iframe
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
            src="https://www.youtube.com/embed/ss7Pzzms1CQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <AboutFeatureText>
            <h2>挑戰無限突破極限</h2>
            <p>
              2013年，謝淑薇打下生涯第一座大滿貫，11年後的澳網，38歲的謝淑薇成為首位囊括混雙、女雙冠軍的選手，也締造台灣網壇史上第一位在單屆賽事奪下兩座大滿貫的紀錄。同年溫網混雙奪冠，拿下生涯第9座大滿貫金盃，樹立新的「謝淑薇障礙」。而對她年紀增長巔峰不再的質疑，也不攻自破。
            </p>
          </AboutFeatureText>
        </AboutFeatureBlock>
      </AboutFeatureSection>
      <AboutFeatureTitle>世界之最 駕馭 同級之最，誰說不可能</AboutFeatureTitle>
      <Accordion
        items={[
          {
            title: "超規滿配，我當然一部到位",
            content: [
              "想擊出好球，最好，一步到位\nMG 堅持「超規滿配」理念，讓消費者在同級車款中獲得更高規格的產品體驗，無需額外加價升級，即可享有領先的智慧科技、安全配備與高效動力。無論是智慧駕駛輔助系統、360° 環景影像，MG 皆以高標準設計，確保每位駕駛者都能享受更安全、智慧且充滿駕馭樂趣的用車體驗。「標配即頂配」的產品精神，讓消費者不必為選配煩惱，一部到位擁有超越期待的駕馭享受。",
            ],
            image:
              "/media/about/accordion/Accordion_超規滿配_pc_1920x1080.webp",
          },
          {
            title: "高質感車室空間，我很有FU",
            content: [
              "質感，不單純是感覺，而是一種眼界\n質感不只是設計，更是全方位的感官體驗。MG 在車室設計上兼顧質感、舒適與實用性，打造前所未有的駕乘體驗。寬敞的車室空間、高質感內裝，提供極致的乘坐享受。此外，MG 採用高規格靜音技術，搭配優異的座椅支撐性與乘坐舒適性，確保每一次旅程都能擁有靜謐愜意的體驗。無論是短途代步還是長途旅行，MG 讓駕駛與乘客皆能享受更舒適愜意的旅途。",
            ],
            image: "/media/about/accordion/Accordion_高質感車室_PC.webp",
          },
          {
            title: "透明車價，我看得一清二楚",
            content: [
              "買車，不需要鷹眼比對\nMG 堅持「透明車價」理念，讓消費者無需比價，，即可享有最合理、公平的購車體驗。所有車款價格清楚公開，杜絕隱藏費用、強制加價或因銷售策略而產生的價格落差，確保每位消費者都能以相同條件購買心儀車款。無論在哪個通路、哪個地區，MG 都提供一致的售價，消費者不必費心貨比三家或擔心錯過最佳購車時機。MG 以公開透明的價格機制，讓每一位車主都能輕鬆購車，真正買得安心、用得放心。",
            ],
            image: "/media/about/accordion/Accordion_透明車價_PC.webp",
          },
          {
            title: "數位購車體驗，我很喜歡",
            content: [
              "不喜歡被牽著走？那就自己掌握\nMG 採用「數位購車」模式，讓消費者透過官方線上平台即可輕鬆完成選車、試駕預約與訂購流程，無需親自跑遍展示中心比價，真正實現便捷、透明的購車體驗。線上平台清楚呈現所有車款價格、配備與購車方案，杜絕傳統購車過程中的隱藏費用與複雜談判，確保每位消費者都能以相同條件公平購車。此外，MG 也提供線上貸款試算，輕鬆掌握購車成本。透過數位化的購車流程，MG 讓購車更透明、更高效，帶來前所未有的便捷體驗。",
            ],
            image: "/media/about/accordion/Accordion_數位購車_PC.webp",
          },
        ]}
      />
      <AboutFeatureSection>
        <AboutFeatureBlock
          style={{
            flexDirection: window.innerWidth <= 500 ? "column" : "row-reverse",
          }}
        >
          <iframe
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
            src="https://www.youtube.com/embed/ss7Pzzms1CQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <AboutFeatureText>
            <h2>挑戰無限突破極限</h2>
            <p>
              2013年，謝淑薇打下生涯第一座大滿貫，11年後的澳網，38歲的謝淑薇成為首位囊括混雙、女雙冠軍的選手，也締造台灣網壇史上第一位在單屆賽事奪下兩座大滿貫的紀錄。同年溫網混雙奪冠，拿下生涯第9座大滿貫金盃，樹立新的「謝淑薇障礙」。而對她年紀增長巔峰不再的質疑，也不攻自破。
            </p>
          </AboutFeatureText>
        </AboutFeatureBlock>
      </AboutFeatureSection>
      <img
        src="/media/about/carouselKV_中間banner_PC.webp"
        style={{ width: "100%", height: "auto" }}
        alt="謝淑薇"
      />
      {/* 預約賞車/試乘表單區塊 */}
      <div style={{ width: "100%" }}>
        <BookingForm />
      </div>
    </AboutContent>
  );
};

export default AboutPage;
