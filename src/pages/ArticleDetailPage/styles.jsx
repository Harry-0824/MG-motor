import styled from "styled-components";

export const ArticleContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
`;

export const ArticleHeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const ArticleContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.4;
    margin: 1.5rem 0 1rem 0;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1.5rem 0;
  }
`;

export const DetailTag = styled.div`
  display: inline-block;
  color: #e10012;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const DetailDate = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;
