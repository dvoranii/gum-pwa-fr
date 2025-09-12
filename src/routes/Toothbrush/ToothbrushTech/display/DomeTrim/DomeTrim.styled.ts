import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.8rem;
`;

export const ColumnLeft = styled.div`
  max-width: 60%;
  padding: 0px 0 30px 80px;
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 3.7vw, 6.4rem);
  line-height: 1;
  letter-spacing: -2px;
  padding-top: 2.4rem;

  sup {
    font-size: 12px;
    font-weight: 500;
    vertical-align: 22px;
    letter-spacing: 0;
  }
`;

export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(16px, 1.9vw, 2.4rem);
  color: #666666;
  line-height: 1.1;
  margin-bottom: 18px;
  letter-spacing: -1px;
  padding-top: 0.8rem;
  padding-right: 43.3px;

  sup {
    font-size: 10px;
  }
`;

export const ColLeftImgWrapper = styled.div`
  img {
    width: 75%;
    margin-left: -19px;
  }
`;

export const ColLeftList = styled.ul`
  font-family: "Gotham", sans-serif;
  margin-top: 1.2rem;
  line-height: 1.25;

  li {
    font-size: clamp(14px, 1.2vw, 2.4rem);
    color: #00a16b;
    font-weight: 600;
    padding-right: 4px;

    sup {
      font-size: 8px;
    }
  }
`;

export const ColumnRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const BristlesDiagramWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
    padding: 2.4rem 0;
  }
`;
