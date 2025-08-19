import { styled } from "styled-components";

export const BottomTextWrapper = styled.div``;

export const BottomTextP = styled.p<{ $isFirst: boolean }>`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(1rem, 1.85vw, 1.7rem);
  padding: 0px 12px;
  letter-spacing: -1px;
  margin-top: ${(props) => (props.$isFirst ? "0.8rem" : "0")};

  sup {
    font-size: 14px;
    margin-left: 1px;
  }
`;
