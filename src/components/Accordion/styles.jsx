import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 2.5rem;
  align-items: flex-start;
  margin: 0 auto;
  border-top: 1px solid #e5e5e5;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export const List = styled.ul`
  flex: 1 1 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  border-bottom: 1px solid #e5e5e5;
  padding: 0;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Title = styled.div`
  font-size: 1.18rem;
  font-weight: 700;
  color: #000;
  padding: 1.2rem 2.5rem 1.2rem 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.15s;
  position: relative;
  &:hover {
    background: #fafbfc;
  }
`;
export const Content = styled.div`
  padding: 0.5rem 2.5rem 1.5rem 2.5rem;
  color: #6d6f73;
  font-size: 1.05rem;
  line-height: 1.7;
  background: #fff;
  @media (max-width: 500px) {
    padding: 0.5rem 1rem 1rem 1rem; // Adjust padding for smaller screens
  }
`;
export const ImageWrapper = styled.div`
  flex: 0 0 48%;
  padding-right: 1.5rem;
  min-width: 340px;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  &.mobile-image-wrapper {
    display: none; // Initially hidden
    width: 100%;
    padding-right: 0;
    margin-top: 1rem; // Space between content and image on mobile
    justify-content: center;
  }

  @media (max-width: 900px) {
    // Styles for tablet and potentially mobile if not overridden
    &.desktop-image-wrapper {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      margin-top: 2rem;
      justify-content: center;
    }
  }

  @media (max-width: 500px) {
    &.desktop-image-wrapper {
      display: none; // Hide desktop image wrapper on small screens
    }
    &.mobile-image-wrapper {
      display: flex; // Show mobile image wrapper
    }
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
`;
export const AccordionIcon = styled.span`
  font-size: 1.5rem;
  color: ${({ active }) => (active ? "#222" : "#222")};
  font-weight: 400;
  min-width: 24px;
  display: inline-block;
  text-align: left;
  transition: color 0.2s;
`;
