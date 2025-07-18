import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Title,
  OptionBlock,
  CarImg,
  CarName,
  CarDesc,
  Arrow,
  CheckboxBlackStyle,
  HomeLinkButton,
} from "./styles";
import { Typography, Radio, Card, Checkbox, Button, Divider } from "antd";
import CompareSpecsModal from "../../components/CompareSpecsModal/CompareSpecsModal";
import { hsDetailedSpecs } from "../../data/hs/detailedSpecs";

const carOptions = [
  {
    name: "MG HS",
    desc: "有本事 讓世界心跳加速",
    img: "/media/order/2022_HS_車款圖_灰.webp",
    to: "/order/hs",
    colors: [
      {
        label: "黑",
        value: "black",
        color: "#222",
        name: "掠影黑",
        img: "/media/hs/MG官網_共用圖_690x494_HS黑.webp",
      },
      {
        label: "白",
        value: "white",
        color: "#eee",
        name: "電掣白",
        img: "/media/hs/MG官網_共用圖_690x494_HS白.webp",
      },
      {
        label: "紅",
        value: "red",
        color: "#b00",
        name: "風馳紅",
        img: "/media/hs/MG官網_共用圖_690x494_HS紅.webp",
      },
      {
        label: "灰",
        value: "gray",
        color: "#888",
        name: "電幻灰",
        img: "/media/hs/MG官網_共用圖_690x494_EHS灰.webp",
      },
    ],
    specs: [
      {
        name: "HS 1.5T 旗艦版",
        subname: "MEGA Tech 1.5T缸內直噴渦輪增壓引擎",
        price: 939000,
        features: [
          "最大馬力 180ps / 最大扭力 29.1kg-m",
          "排氣量 1,490cc",
          "12.3吋數位儀表",
          "10.1吋多媒體螢幕/無線Carplay",
          "運動化內外觀設計",
          "賽道之眼LED 科技頭燈組",
          "Trophy專屬套件+一體式賽車座椅",
          "MG PILOT 2.0 Level 2 智能駕駛輔助",
        ],
      },
    ],
    notice: [
      "請留意：",
      "準25年式車輛價格&amp;購車優惠，請見MG Taiwan 官網「最新購車優惠」，數量有限售完為止",
      "部分車色為特殊車色，實際供應數量和時程請洽詢銷售顧問",
      "為確保服務品質，請於MG認證的服務中心進行保養維修，避免影響保固權益",
      "行政院核定延長電動車輛減免貨物稅(貨物稅條例第12條之3)年限至114年12月31日, 免稅車輛不適用財政部減徵貨物稅5萬元補助 (減免年限屆期前半年，行政院得視實際推展情況決定是否延長減免年限)，MG4車型已依前述條例反應於售價，故不適用財政部減徵貨物稅5萬元補助",
    ],
  },
  {
    name: "MG ZS",
    desc: "天生出眾",
    img: "/media/order/MG ZS官網_BLUE_FA.webp",
    to: "/order/zs",
    colors: [
      {
        label: "藍",
        value: "blue",
        color: "#1e6edb",
        name: "蘇打藍",
        img: "/media/zs/MG ZS官網_BLUE_FA.webp",
      },
      {
        label: "白",
        value: "white",
        color: "#eee",
        name: "奶昔白",
        img: "/media/zs/2023_ZS_White_FA.webp",
      },
      {
        label: "橘",
        value: "red",
        color: "#b00",
        name: "貝果橘",
        img: "/media/zs/2023_ZS_Orange_FA.webp",
      },
      {
        label: "銀",
        value: "gray",
        color: "#888",
        name: "秋刀銀",
        img: "/media/zs/2023_ZS_Silver_FA.webp",
      },
      {
        label: "黑",
        value: "black",
        color: "#222",
        name: "墨魚黑",
        img: "/media/zs/2023_ZS_Black_FA.webp",
      },
    ],
    specs: [
      {
        name: "ZS 1.5L 豪華版",
        price: 799000,
        features: [
          "最大馬力 120ps 最大扭力 15.3kg-m",
          "MG PILOT 2.0 Level 2 智慧駕駛輔助",
          "360° 環景系統",
          "沉浸式全景天窗",
          "銀石之翼LED頭燈",
          "多功能數位儀表",
          "10.1吋懸浮觸控螢幕整合Carplay",
          "後座冷氣出風口",
        ],
      },
    ],
    notice: [
      "請留意：",
      "準25年式車輛價格&amp;購車優惠，請見MG Taiwan 官網「最新購車優惠」，數量有限售完為止",
      "部分車色為特殊車色，實際供應數量和時程請洽詢銷售顧問",
      "為確保服務品質，請於MG認證的服務中心進行保養維修，避免影響保固權益",
      "行政院核定延長電動車輛減免貨物稅(貨物稅條例第12條之3)年限至114年12月31日, 免稅車輛不適用財政部減徵貨物稅5萬元補助 (減免年限屆期前半年，行政院得視實際推展情況決定是否延長減免年限)，MG4車型已依前述條例反應於售價，故不適用財政部減徵貨物稅5萬元補助",
    ],
  },
];

const { Title: AntTitle, Text } = Typography;

const OrderPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState(null);
  const [color, setColor] = useState(null);
  const [spec, setSpec] = useState(0);
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [step, setStep] = useState(1); // 1: 車款選擇/規格, 2: 內裝選擇

  // 解析網址 carId 參數，自動顯示對應車款詳情
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const carId = params.get("carId");
    if (carId) {
      const car = carOptions.find((c) =>
        c.name.replace(/\s/g, "").toLowerCase().includes(carId.toLowerCase())
      );
      if (car) {
        setSelectedCar(car);
        setColor(car.colors[0].value);
        setSpec(0);
        setStep(1); // 每次切換車型時回到第一步
      }
    } else {
      setSelectedCar(null);
      setStep(1);
    }
    // eslint-disable-next-line
  }, [location.search]);

  if (!selectedCar) {
    return (
      <Container>
        <Title>選擇車款</Title>
        {carOptions.map((car) => (
          <OptionBlock
            key={car.name}
            onClick={() => {
              history.replace({
                search: `?carId=${car.name.replace(/\s/g, "")}`,
              });
            }}
          >
            <CarImg src={car.img} alt={car.name} />
            <div>
              <CarName>{car.name}</CarName>
              <CarDesc>{car.desc}</CarDesc>
            </div>
            <Arrow>&#8250;</Arrow>
          </OptionBlock>
        ))}
      </Container>
    );
  }

  return (
    <>
      <CheckboxBlackStyle />
      <Container style={{ maxWidth: 1400 }}>
        {/* 上半部：車輛資訊與選項（左右分布） */}
        {step === 1 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 32,
              gap: 32,
            }}
          >
            {/* 左側：標題與車圖 */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <AntTitle level={4} style={{ marginTop: 16, marginBottom: 0 }}>
                打造專屬於您的
              </AntTitle>
              <AntTitle level={2} style={{ margin: 0 }}>
                {selectedCar.name}
              </AntTitle>
              <img
                src={
                  selectedCar.colors.find((c) => c.value === color)?.img ||
                  selectedCar.img
                }
                alt={selectedCar.name}
                style={{
                  width: "90%",
                  maxWidth: 480,
                  margin: "32px auto 0",
                }}
              />
            </div>
            {/* 右側：顏色選項與規格資訊 */}
            <div style={{ flex: 1, minWidth: 320 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <AntTitle
                  level={4}
                  style={{
                    marginTop: 0,
                    marginBottom: 0,
                    marginRight: 16,
                    flexShrink: 0,
                  }}
                >
                  車款顏色
                </AntTitle>
                <Radio.Group
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {selectedCar.colors.map((c) => (
                    <Radio.Button
                      key={c.value}
                      value={c.value}
                      style={{
                        marginRight: 8,
                        padding: 0,
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #ccc",
                        boxShadow: "none",
                        background: "#fff",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: c.color,
                          border: "2px solid #eee",
                          verticalAlign: "middle",
                          boxSizing: "border-box",
                        }}
                      />
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </div>
              <span
                style={{
                  display: "block",
                  marginBottom: 16,
                  color: "#6d6f73",
                  fontWeight: 500,
                }}
              >
                {selectedCar.colors.find((c) => c.value === color)?.name}
              </span>
              <AntTitle level={4} style={{ marginBottom: 8 }}>
                車款規格
                <Button
                  type="link"
                  style={{
                    marginLeft: 12,
                    fontWeight: 400,
                    fontSize: 16,
                    padding: 0,
                  }}
                  onClick={() => setShowSpecsModal(true)}
                >
                  詳細規格比較
                </Button>
              </AntTitle>
              <Card
                style={{ marginBottom: 16, border: "1px solid #000000" }}
                title={
                  <span>
                    <Checkbox checked className="checkbox-black" />{" "}
                    {selectedCar.specs[spec].name}
                    {selectedCar.specs[spec].subname && (
                      <div
                        style={{
                          fontSize: 16,
                          color: "#000000",
                          fontWeight: 400,
                          marginTop: 2,
                        }}
                      >
                        {selectedCar.specs[spec].subname}
                      </div>
                    )}
                  </span>
                }
                extra={
                  <Text
                    strong
                    style={{ color: "#b00", fontSize: 18 }}
                  >{`NT$${selectedCar.specs[
                    spec
                  ].price.toLocaleString()}`}</Text>
                }
              >
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {selectedCar.specs[spec].features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </Card>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 24,
                }}
              >
                <Text strong style={{ fontSize: 18, color: "#b00" }}>
                  目前總價：NT${selectedCar.specs[spec].price.toLocaleString()}
                </Text>
                <HomeLinkButton onClick={() => setStep(2)}>
                  繼續選擇
                </HomeLinkButton>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 32,
              gap: 32,
            }}
          >
            {/* 左側：內裝大圖 */}
            <div style={{ flex: "1 1 100%", textAlign: "center" }}>
              <img
                src={
                  selectedCar.name === "MG ZS"
                    ? "/media/order/MG-ZS官網網頁_0816_內裝_PC_1920x1080_1.webp"
                    : "/media/order/InteriorColor_black1.webp"
                }
                alt="內裝"
                style={{
                  width: "100%",
                  margin: "0 auto",
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            </div>
            {/* 右側：內裝顏色選擇 */}
            <div
              style={{
                flex: 1,
                minWidth: 320,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
                height: 480,
                minHeight: 400,
              }}
            >
              <div
                style={{
                  color: "#b00",
                  fontSize: 14,
                  marginBottom: 8,
                  cursor: "pointer",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  onClick={() => setStep(1)}
                  style={{
                    fontSize: 20,
                    marginRight: 6,
                    cursor: "pointer",
                    display: "inline-block",
                  }}
                >
                  &lt;
                </span>
                <span>2 / 2 內裝</span>
              </div>
              <AntTitle level={3} style={{ margin: 0, marginBottom: 8 }}>
                內裝顏色
              </AntTitle>
              <div
                style={{ color: "#6d6f73", marginBottom: 24, fontWeight: 500 }}
              >
                質感黑內裝
              </div>
              <Radio.Group value={"black"} style={{ marginBottom: 32 }}>
                <Radio.Button
                  value="black"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #222",
                    background: "#fff",
                    boxShadow: "none",
                    marginRight: 16,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#222",
                      border: "2px solid #888",
                      marginTop: 10,
                    }}
                  />
                </Radio.Button>
              </Radio.Group>

              {/* 目前總價與預覽訂單按鈕 */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "24px 0 0 0",
                  background: "#fff",
                }}
              >
                <div
                  style={{ color: "#6d6f73", fontSize: 16, fontWeight: 500 }}
                >
                  目前總價
                  <span
                    style={{
                      color: "#222",
                      fontSize: 28,
                      fontWeight: 700,
                      marginLeft: 8,
                    }}
                  >
                    ${selectedCar.specs[spec].price.toLocaleString()}
                  </span>
                </div>
                <HomeLinkButton
                  style={{ minWidth: 140, fontSize: 18, height: 48 }}
                >
                  預覽訂單
                </HomeLinkButton>
              </div>
            </div>
          </div>
        )}
        {/* 下半部：notice 區塊 */}
        <Divider />
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {selectedCar.notice.map((n, i) => (
            <div
              key={i}
              style={{
                color: i === 0 ? "#b00" : "#b00",
                fontSize: 14,
                marginBottom: 4,
                lineHeight: 1.7,
              }}
            >
              {n}
            </div>
          ))}
        </div>
        {/* 詳細規格比較彈窗 */}
        {selectedCar.name === "MG HS" && (
          <CompareSpecsModal
            visible={showSpecsModal}
            onClose={() => setShowSpecsModal(false)}
            carName={selectedCar.name}
            detailedSpecs={hsDetailedSpecs}
            specName={selectedCar.specs[spec].name}
          />
        )}
      </Container>
    </>
  );
};

export default OrderPage;
