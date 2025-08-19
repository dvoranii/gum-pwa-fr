import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/Adult/Slide1/Brush-DeepClean.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/DeepClean/525-DeepClean-BottomImg.webp";

export default function DeepCleanSlide() {
  return (
    <S.Container>
      <S.SlideContent>
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Deep Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $letterSpacing="-4px">
              TECHNIQUE<sup>MD</sup>
            </S.Title>
            <S.Subtitle>Deep Clean</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList $lineHeight="1.2" $paddingRight="0">
            <li>
              <span>Soies extrêmement effilées.</span>
            </li>
            <li>
              <span>
                Élimination de plaque 10x plus efficace.<sup>15</sup>
              </span>
            </li>
            <li>
              <span>
                Maintenant avec des brins antibactériens.<sup>16</sup>
              </span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="0.8rem" $marginLeft="1.2rem">
            <S.ContentImage
              $width="70%"
              src={ContentImage}
              alt="Deep Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
