import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterGrid,
  FooterSection,
  FooterSectionTitle,
  FooterLinkList,
  FooterLinkItem,
  FooterLink,
  SocialLinks,
  SocialLink,
  FooterBottom,
  CopyrightText,
  FooterRule,
} from "./styles";

// SVG Icon Components
const FacebookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "8px" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.326981 1.63803C0 2.27976 0 3.11984 0 4.8V11.2C0 12.8802 0 13.7202 0.326981 14.362C0.614601 14.9265 1.07354 15.3854 1.63803 15.673C2.27976 16 3.11984 16 4.8 16H6.78276V10.3959H4.7V7.97383H6.78276V6.19177C6.78276 4.12556 8.04624 3.00004 9.88896 3.00004C10.5099 2.99869 11.1306 3.02999 11.7482 3.09383V5.25383H10.4793C9.4752 5.25383 9.27928 5.72832 9.27928 6.42901V7.97108H11.6793L11.3676 10.3931H9.26552V16H11.2C12.8802 16 13.7202 16 14.362 15.673C14.9265 15.3854 15.3854 14.9265 15.673 14.362C16 13.7202 16 12.8802 16 11.2V4.8C16 3.11984 16 2.27976 15.673 1.63803C15.3854 1.07354 14.9265 0.614601 14.362 0.326981C13.7202 0 12.8802 0 11.2 0H4.8C3.11984 0 2.27976 0 1.63803 0.326981C1.07354 0.614601 0.614601 1.07354 0.326981 1.63803Z"
      fill="#919399"
    ></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "8px" }}
  >
    <path
      d="M15.8972 2.62751C15.8972 1.23303 14.8627 0.111249 13.5844 0.111249C11.8529 0.0309884 10.0871 0 8.28248 0H7.71991C5.91969 0 4.15071 0.0309884 2.41925 0.111559C1.14408 0.111559 0.109579 1.23954 0.109579 2.63402C0.031444 3.7369 -0.00168518 4.84009 0.000190058 5.94328C-0.00293534 7.04647 0.0324858 8.1507 0.106453 9.25595C0.106453 10.6504 1.14096 11.7815 2.41612 11.7815C4.2351 11.8652 6.10096 11.9024 7.99807 11.8993C9.89831 11.9055 11.759 11.8662 13.58 11.7815C14.8583 11.7815 15.8928 10.6504 15.8928 9.25595C15.9678 8.14966 16.0022 7.04647 15.9991 5.94018C16.0062 4.83699 15.9722 3.73277 15.8972 2.62751ZM6.46976 8.98325V2.89402L11.0016 5.93709L6.46976 8.98325Z"
      fill="#919399"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "8px" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.70161 0.0481422C5.5549 0.00920928 5.82733 0 8 0C10.1726 0 10.4451 0.00920928 11.2984 0.0481422C12.1499 0.08698 12.7314 0.222229 13.2403 0.420006C13.7664 0.624419 14.2125 0.897968 14.6573 1.34271C15.102 1.78749 15.3756 2.23362 15.58 2.7597C15.7778 3.26855 15.913 3.8501 15.9518 4.70161C15.9908 5.5549 16 5.82733 16 8C16 10.1726 15.9908 10.4451 15.9518 11.2984C15.913 12.1499 15.7778 12.7314 15.58 13.2403C15.3756 13.7664 15.102 14.2125 14.6573 14.6573C14.2125 15.102 13.7664 15.3756 13.2403 15.58C12.7314 15.7778 12.1499 15.913 11.2984 15.9518C10.4451 15.9908 10.1726 16 8 16C5.82733 16 5.5549 15.9908 4.70161 15.9518C3.8501 15.913 3.26855 15.7778 2.7597 15.58C2.23362 15.3756 1.78749 15.102 1.34271 14.6573C0.897968 14.2125 0.624419 13.7664 0.420006 13.2403C0.222229 12.7314 0.08698 12.1499 0.0481422 11.2984C0.00920928 10.4451 0 10.1726 0 8C0 5.82733 0.00920928 5.5549 0.0481422 4.70161C0.08698 3.8501 0.222229 3.26855 0.420006 2.7597C0.624419 2.23362 0.897968 1.78749 1.34271 1.34271C1.78749 0.897968 2.23362 0.624419 2.7597 0.420006C3.26855 0.222229 3.8501 0.08698 4.70161 0.0481422ZM12.7182 1.7635C12.4363 1.65395 12.0127 1.52362 11.2327 1.48806C10.3891 1.44957 10.1361 1.44141 8 1.44141C5.86392 1.44141 5.61089 1.44957 4.76732 1.48806C3.98733 1.52362 3.56374 1.65395 3.28184 1.7635C2.90842 1.90863 2.64192 2.08199 2.36199 2.36195C2.08203 2.64188 1.90867 2.90838 1.76355 3.2818C1.65399 3.5637 1.52366 3.98729 1.4881 4.76728C1.44961 5.61085 1.44145 5.86388 1.44145 7.99998C1.44145 10.1361 1.44961 10.3891 1.4881 11.2326C1.52366 12.0126 1.65399 12.4362 1.76355 12.7182C1.90867 13.0915 2.08206 13.3581 2.36199 13.638C2.64192 13.9179 2.90842 14.0913 3.28184 14.2364C3.56374 14.346 3.98733 14.4763 4.76732 14.5118C5.61079 14.5504 5.86376 14.5586 8 14.5586C10.1362 14.5586 10.3893 14.5504 11.2327 14.5118C12.0127 14.4763 12.4363 14.346 12.7182 14.2364C13.0916 14.0913 13.3581 13.9179 13.638 13.638C13.918 13.3581 14.0914 13.0915 14.2365 12.7182C14.346 12.4362 14.4763 12.0126 14.5119 11.2326C14.5504 10.3891 14.5586 10.1361 14.5586 7.99998C14.5586 5.86388 14.5504 5.61085 14.5119 4.76728C14.4763 3.98729 14.346 3.5637 14.2365 3.2818C14.0914 2.90838 13.918 2.64188 13.638 2.36195C13.3581 2.08199 13.0916 1.90863 12.7182 1.7635ZM8 3.8919C5.73115 3.8919 3.8919 5.73115 3.8919 8C3.8919 10.2689 5.73115 12.1081 8 12.1081C10.2689 12.1081 12.1081 10.2689 12.1081 8C12.1081 5.73115 10.2689 3.8919 8 3.8919ZM5.33332 7.99999C5.33332 9.47272 6.52722 10.6666 8 10.6666C9.47272 10.6666 10.6666 9.47272 10.6666 7.99999C10.6666 6.52722 9.47272 5.33331 8 5.33331C6.52722 5.33331 5.33332 6.52722 5.33332 7.99999ZM12.2704 4.68959C12.8006 4.68959 13.2304 4.25981 13.2304 3.72961C13.2304 3.19941 12.8006 2.76959 12.2704 2.76959C11.7402 2.76959 11.3104 3.19941 11.3104 3.72961C11.3104 4.25981 11.7402 4.68959 12.2704 4.68959Z"
      fill="#919399"
    ></path>
  </svg>
);

const Footer = () => {
  // State to manage accordion open/close for each section
  const [openAccordion, setOpenAccordion] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  // Function to toggle accordion
  const toggleAccordion = (sectionTitle) => {
    if (isMobile) {
      setOpenAccordion((prevState) => ({
        ...prevState,
        [sectionTitle]: !prevState[sectionTitle],
      }));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      // If resizing to desktop, close all accordions
      if (window.innerWidth > 500) {
        setOpenAccordion({});
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerSections = [
    {
      title: "車款介紹",
      links: [
        { label: "HS", to: "/hs" },
        { label: "ZS", to: "/zs" },
      ],
    },
    {
      title: "購車專區",
      links: [
        { label: "預約賞車/試乘", to: "/test-drive" },
        { label: "車價試算與線上下訂", to: "/order" },
      ],
    },
    {
      title: "關於 MG",
      links: [
        { label: "品牌介紹", to: "/about" },
        { label: "聯絡我們", to: "/contact" },
        { label: "查詢據點", to: "/dealer" },
      ],
    },
    {
      title: "探索 MG",
      links: [
        { label: "最新活動消息", to: "/explore#latest-news" },
        { label: "最新購車優惠", to: "/explore#offers" },
        { label: "車主經驗分享", to: "/explore#owner-sharing" },
      ],
    },
  ];

  return (
    <FooterContainer>
      <FooterGrid>
        {footerSections.map((section) => (
          <FooterSection key={section.title}>
            <FooterSectionTitle
              isOpen={openAccordion[section.title] || !isMobile}
              onClick={() => toggleAccordion(section.title)}
            >
              {section.title}
            </FooterSectionTitle>
            <FooterLinkList isOpen={openAccordion[section.title] || !isMobile}>
              {section.links.map((link) => (
                <FooterLinkItem key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </FooterLinkItem>
              ))}
            </FooterLinkList>
          </FooterSection>
        ))}

        <FooterSection>
          {" "}
          {/* Section for Social Links */}
          {/* On mobile, SocialLinks might not need a title or it's handled differently */}
          {/* <FooterSectionTitle>追蹤我們</FooterSectionTitle> */}
          <SocialLinks>
            <SocialLink
              href="https://www.facebook.com/MGTaiwan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon /> Facebook
            </SocialLink>
            <SocialLink
              href="https://www.youtube.com/channel/UC_0UKN5V7P0QjX0mX0Y0q0A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon /> YouTube
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/mg_taiwan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon /> Instagram
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterGrid>
      <FooterRule />
      <FooterBottom>
        <CopyrightText>
          Copyright©台灣英倫摩里斯汽車事業股份有限公司 |{" "}
          <FooterLink to="/privacy-policy" style={{ color: "#6c757d" }}>
            隱私權政策
          </FooterLink>{" "}
          |{" "}
          <FooterLink to="/cookie-policy" style={{ color: "#6c757d" }}>
            Cookie 政策
          </FooterLink>{" "}
          |{" "}
          <FooterLink
            to="/environmental-noise-policy"
            style={{ color: "#6c757d" }}
          >
            環保署環境噪音政策宣導
          </FooterLink>
        </CopyrightText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
