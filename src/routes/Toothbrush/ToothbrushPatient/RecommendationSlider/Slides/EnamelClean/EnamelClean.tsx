import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/Adult/Slide2/Brush-Enamel.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/DeepClean/4471-EnamelClean-BottomImg.webp";

export default function EnamelCleanSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="1.8rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Enamel Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper $marginBottom="0">
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">
              TECHNIQUE<sup>MD</sup>
            </S.Title>
            <S.Subtitle>Enamel Clean</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="2rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                La technologie micro-filamentée divise chaque soie en plusieurs
                pointes fines.
              </span>
            </li>
            <li>
              <span>
                La surface de l’émail nettoyée est 70 % plus grande que celle
                d’une brosse dont les soies ont les bouts arrondis<sup>17</sup>.
              </span>
            </li>
            <li>
              <span>
                Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
                nettoyer souse<sup>18, 19</sup>.
              </span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="0.4rem" $marginLeft="1.2rem">
            <S.ContentImage
              $width="60%"
              src={ContentImage}
              alt="Enamel Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
