import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.color.grey} 1px solid;
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    padding: 1rem;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.bp.lg};
`;

export const LinkContainer = styled.div<{ $justify: "start" | "end" }>`
  display: flex;
  flex: 1;

  justify-content: flex-${({ $justify }) => $justify};

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.color.greyDark};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: lighter;
  margin: 0.5rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    left: 0;
    right: 0;
    bottom: -0.25rem;
    transition: all 0.2s;
    height: 1px;
    width: 0;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.color.primary};
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  margin: 0 0.5rem;
  height: 64px;
  width: 64px;
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    height: 56px;
    width: 56px;
  }
`;
