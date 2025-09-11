import { styled } from "styled-components";
import { colors } from "../../../../../constants/colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 1.8rem;
  overflow: hidden;
`;

export const ImgWrapper = styled.div`
  height: 78vh;
  display: flex;
  align-items: flex-end;
`;

export const ImgAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainImage = styled.img<{ $height?: string }>`
  height: ${(props) => props.$height || "90%"};
  width: auto;
  object-fit: contain;
  margin-bottom: 1.2rem;
`;

interface TitleProps {
  $fontSize?: string;
}

export const Title = styled.h2<TitleProps>`
  font-family: "Gotham", sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.$fontSize || "clamp(24px, 6vw, 3.2rem)"};
  color: ${colors.primary};
  letter-spacing: -2px;
  text-align: left;
  padding-top: 2.4rem;
  line-height: 1;

  sup {
    font-size: 12px;
    vertical-align: 20px;
  }
`;

interface SubtitleProps {
  $fontSize?: string;
  $marginTop?: string;
}

export const Subtitle = styled.h3<SubtitleProps>`
  font-family: "Gotham", sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.$fontSize || "clamp(18px, 4.3vw, 3.2rem)"};
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: left;
  line-height: 1;
  margin-bottom: 0.4rem;
  ${(props) => props.$marginTop && `margin-top: ${props.$marginTop}`};

  @media screen and (max-width: 1080px) {
    font-size: clamp(24px, 6vw, 2.2rem);
  }
`;

export const BulletList = styled.ul`
  padding: 0;
  text-align: left;

  li {
    font-family: "Gotham", sans-serif;
    font-size: clamp(16px, 1.8vw, 1.8rem);
    color: ${colors.primary};
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.5px;

    span {
      display: block;
      width: 100%;
      color: #666;
    }

    sup {
      font-size: 10px;
    }
  }
`;

interface ComparisonImageProps {
  $width?: string;
}

export const ComparisonImage = styled.img<ComparisonImageProps>`
  width: ${(props) => props.$width || "100%"};
  align-self: center;
  margin-bottom: 2rem;
  margin-left: -24px;
  margin-top: 0.5rem;
`;
