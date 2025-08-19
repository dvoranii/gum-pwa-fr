import styled from "styled-components";

interface TitleProps {
  $marginBottom?: string;
}
export const Title = styled.h1<TitleProps>`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: 2.1rem;
  letter-spacing: -2px;
  margin-left: 12px;
  user-select: none;
  ${({ $marginBottom }) => $marginBottom && `margin-bottom: ${$marginBottom};`}

  sup {
    font-size: 18px;
  }
`;
