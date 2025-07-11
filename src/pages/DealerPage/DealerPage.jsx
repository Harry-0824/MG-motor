import React from "react";
import { HeroImageWrapper, HeroImage } from "./styles";

const DealerPage = () => {
  return (
    <div className="dealer-page">
      {" "}
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
    </div>
  );
};

export default DealerPage;
