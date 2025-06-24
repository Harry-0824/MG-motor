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

  @media (max-width: 500px) {
    grid-template-columns: 1fr; /* Stack sections vertically */
    text-align: center; /* Center accordion titles */
  }
`;

export const FooterSection = styled.div`
  min-width: 150px; /* Ensure sections have a minimum width */
  @media (max-width: 500px) {
    margin-bottom: 10px; /* Add some space between accordions */
  }
`;

export const FooterSectionTitle = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #212529; /* Slightly darker for titles */
  cursor: default; /* Default cursor for desktop */

  @media (max-width: 500px) {
    cursor: pointer; /* Pointer cursor for accordion */
    margin-bottom: 8px; /* Adjust margin for accordion */
    padding: 10px;
    border-bottom: 1px solid #eee; /* Separator for accordion items */
    display: flex; /* For centering and arrow */
    justify-content: space-between; /* Center title text */
    align-items: center; /* Align arrow with text */
    position: relative; /* For arrow positioning */

    &::after {
      content: "${(props) => (props.isOpen ? "-" : "+")}"; /* +/- icon */
      font-size: 1.2rem; /* Adjusted font-size for better visibility of +/- */
      position: absolute;
      right: 15px; /* Position arrow to the right */
    }
  }
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 500px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    padding-left: 0; /* Remove padding for centered items */
    text-align: center; /* Center link items */
  }
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 8px;
  @media (max-width: 500px) {
    padding: 8px 0; /* Add some padding to accordion items */
  }
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

  @media (max-width: 500px) {
    flex-direction: row; /* Side-by-side for 2 columns */
    flex-wrap: wrap; /* Allow wrapping if more than 2 items */
    justify-content: flex-start; /* Center the social links container */
    align-items: center; /* Align items in the center */
    margin-top: 20px; /* Adjust margin for mobile */
  }
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

  @media (max-width: 500px) {
    flex-basis: 45%; /* Roughly 2 columns, adjust as needed with gap */
    justify-content: center; /* Center icon and text within the link */
  }
`;

export const FooterRule = styled.hr`
  border: 0;
  border-top: 1px solid #dee2e6; /* Light grey rule */
  margin: 30px 0;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
`;

export const CopyrightText = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0;
`;
