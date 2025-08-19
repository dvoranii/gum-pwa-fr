import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/Adult/Slide2/Brush-SensitiveCare.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/DeepClean/517-SensitiveCare-BottomImg.webp";

export default function SensitiveCareSlide() {
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
            <S.Subtitle>Sensitive Care</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="3.4rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                Manche Quad-Grip MD unique et soies Dome Trim<sup>MD</sup>{" "}
                combinés aux soies ultra-souples.
              </span>
            </li>
            <li>
              <span>
                Solution douce, mais efficace pour l’élimination de la plaque et
                le soin des gencives.
              </span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="1.2rem">
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
