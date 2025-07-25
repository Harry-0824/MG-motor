import React, { useEffect, useRef, useState, memo } from "react";
import {
  StickyBarContainer,
  StickyBarItem,
  StickyBarDivider,
  StickyBarIcon,
  StickyBarText,
} from "./styles";

const StickyBar = ({
  footerId = "footer",
  nextStepFormId = "next-step-form",
}) => {
  const barRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById(footerId);
      const nextStepForm = document.getElementById(nextStepFormId);
      const bar = barRef.current;
      if (!footer || !bar || !nextStepForm) return;
      const footerRect = footer.getBoundingClientRect();
      const barRect = bar.getBoundingClientRect();
      const nextStepFormRect = nextStepForm.getBoundingClientRect();
      // 若footer進入視窗底部，則取消fixed，並讓bar緊貼NextStepForm下方
      if (footerRect.top < window.innerHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerId, nextStepFormId]);

  return (
    <StickyBarContainer
      ref={barRef}
      $fixed={isFixed}
      $nextStepFormId={nextStepFormId}
    >
      <StickyBarItem>
        <StickyBarIcon>⏱️</StickyBarIcon>
        <StickyBarText>預約試乘</StickyBarText>
      </StickyBarItem>
      <StickyBarDivider />
      <StickyBarItem>
        <StickyBarIcon>📍</StickyBarIcon>
        <StickyBarText>查詢據點</StickyBarText>
      </StickyBarItem>
      <StickyBarDivider />
      <StickyBarItem>
        <StickyBarIcon>⬇️</StickyBarIcon>
        <StickyBarText>下載型錄</StickyBarText>
      </StickyBarItem>
    </StickyBarContainer>
  );
};

export default memo(StickyBar);
