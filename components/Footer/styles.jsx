import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #f8f9fa; /* Light grey background */
  color: #343a40; /* Dark grey text */
  padding: 40px 20px;
  font-family: "Arial", sans-serif; /* Example font */
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterSection = styled.div`
  min-width: 150px; /* Ensure sections have a minimum width */
`;

export const FooterSectionTitle = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #212529; /* Slightly darker for titles */
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 8px;
`;

export const FooterLink = styled(Link)`
  color: #6c757d; /* Medium grey for links */
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: #d32f2f; /* MG Red for hover */
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column; /* Stack social links vertically in their section */
  align-items: flex-start;
  margin-top: 2rem; /* Space above social links */
`;

export const SocialLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem; /* Increased from 8px */

  &:hover {
    color: #d32f2f;
  }
`;

export const FooterRule = styled.hr`
  border: 0;
  border-top: 1px solid #dee2e6; /* Light grey rule */
  margin: 30px 0;
`;

export const FooterBottom = styled.div`
  text-align: center;
`;

export const CopyrightText = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0;
`;
