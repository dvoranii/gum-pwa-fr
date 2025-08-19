import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/Adult/Slide1/Brush-SensitiveClean.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/DeepClean/528-SensitiveClean-BottomImg.webp";

export default function SensitiveCleanSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="1.6rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Sensitive Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">
              TECHNIQUE<sup>MD</sup>
            </S.Title>
            <S.Subtitle>Sensitive Clean</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="1.2rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                Nettoyage 6x plus efficace avec des soies ultra-souples.
                <sup>17</sup>
              </span>
            </li>
            <li>
              <span>Spécialement conçues pour la sensibilité.</span>
            </li>
            <li>
              <span>
                Les soies extrêmement effilées ont un diamètre très fin.
              </span>
            </li>
            <li>
              <span>
                Maintenant avec des brins antibactériens.<sup>16</sup>
              </span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="0" $marginLeft="1.2rem">
            <S.ContentImage
              $width="90%"
              src={ContentImage}
              alt="Sensitive Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
