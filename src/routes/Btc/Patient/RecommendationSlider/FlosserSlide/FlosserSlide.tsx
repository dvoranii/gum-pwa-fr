import * as S from "./FlosserSlide.styles";
import { BulletPoint } from "../../../../../types/BulletPoint";
import { JSX } from "react";

type FlosserSlideProps = {
  title: string | JSX.Element;
  titleSize?: string;
  subtitle: string | JSX.Element;
  subtitleSize?: string;
  subtitleMarginTop?: string;
  sideImage: string;
  sideImageHeight?: string;
  bottomImage?: string;
  bottomImageWidth?: string;
  bullets: BulletPoint[];
  superScriptAlign?: string;
  superScriptSize?: string;
};

export default function FlosserSlide({
  title,
  titleSize,
  subtitle,
  subtitleSize,
  subtitleMarginTop,
  sideImage,
  sideImageHeight,
  bottomImage,
  bullets,
  bottomImageWidth,
  superScriptAlign,
  superScriptSize
}: FlosserSlideProps) {
  return (
    <S.Container>
      <S.ImgWrapper>
        <S.MainImage
          src={sideImage}
          alt={`${title} ${subtitle}`}
          $height={sideImageHeight}
        />
      </S.ImgWrapper>

      <S.ImgAndTextWrapper>
        <S.Title $fontSize={titleSize} $superscriptAlign={superScriptAlign} $superscriptSize={superScriptSize}>{title}</S.Title>
        <S.Subtitle $fontSize={subtitleSize} $marginTop={subtitleMarginTop}>
          {subtitle}
        </S.Subtitle>

        <S.BulletList>
          {bullets.map((bullet, index) => (
            <li key={index}>
              {bullet.lines ? (
                bullet.lines.map((line, i) => <span key={i}>{line}</span>)
              ) : (
                <span>{bullet.text}</span>
              )}
            </li>
          ))}
        </S.BulletList>

        {bottomImage && (
          <S.ComparisonImage
            $width={bottomImageWidth}
            src={bottomImage}
            alt={`${title} comparison`}
          />
        )}
      </S.ImgAndTextWrapper>
    </S.Container>
  );
}
