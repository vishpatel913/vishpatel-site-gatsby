import styled from "styled-components";

export const TechContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    max-height: 100%;
    grid-template-columns: 1fr;
    align-items: end;
  }
`;

export const TechLogo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    justify-content: flex-end;
  }
`;

export const TechDetails = styled.div``;

export const TechName = styled.strong`
  display: block;
  text-align: left;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    font-size: 16px;
  }
`;

export const RatingContainer = styled.div`
  display: inline-block;
  font-size: 12px;
`;
