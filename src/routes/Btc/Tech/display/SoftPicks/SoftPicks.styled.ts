import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const HeaderRight = styled.div`
  padding: 0px 20px 0px 80px;
  flex: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #00a16b;
  font-size: clamp(18px, 3.8vw, 6.4rem);
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: -2px;
  padding-right: 32px;

  sup {
    font-size: 12px;
    vertical-align: 24px;
    letter-spacing: 0.25px;
  }
`;


export const Description = styled.ul`
  font-family: "Gotham", sans-serif;
  font-size: clamp(18px, 1.8vw, 2.4rem);
  color: #666666;
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: -1px;
  padding-right: 104px;

  sup {
    font-size: 10px;
  }
`;

export const DiagramSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 12px;
`;

export const AngleDemo = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CrossSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const DiagramLabel = styled.span`
  font-family: "Gotham", sans-serif;
  font-size: 12px;
  color: #666666;
  text-align: center;
  margin-bottom: 5px;
`;

export const CrossSectionDiagram = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 90%;
    height: auto;
  }
`;

export const CrossSectionIcon = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SoftPickImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  min-width: 0;
  margin-right: -28px;

  img {
    width: auto;
    height: 100%;
  }
`;
