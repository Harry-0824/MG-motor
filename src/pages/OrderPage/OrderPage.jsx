import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Title,
  OptionBlock,
  CarImg,
  CarName,
  CarDesc,
  Arrow,
} from "./styles";

const carOptions = [
  {
    name: "MG HS",
    desc: "有本事 讓世界心跳加速",
    img: "/media/order/2022_HS_車款圖_灰.webp",
    to: "/order/hs",
  },
  {
    name: "MG ZS",
    desc: "天生出眾",
    img: "/media/order/MG ZS官網_BLUE_FA.webp",
    to: "/order/zs",
  },
];

const OrderPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>選擇車款</Title>
      {carOptions.map((car) => (
        <OptionBlock key={car.name} onClick={() => history.push(car.to)}>
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
};

export default OrderPage;
