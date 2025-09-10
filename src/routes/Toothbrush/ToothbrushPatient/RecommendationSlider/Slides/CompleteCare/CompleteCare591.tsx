import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/591-CompleteCare.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/DeepClean/591-CompleteCare-BottomImg.webp";

export default function CompleteCare591Slide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="0.8rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Complete Care Technique Toothbrush"
            $height="61vh"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">
              TECHNIQUE<sup>MD</sup>
            </S.Title>
            <S.Subtitle>Complete Care</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="1.6rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                Soies surélevées situées à l’extrémité de la brosse qui
                facilitent l’accès aux zones postérieures.
              </span>
            </li>
            <li>
              <span>Nettoyage des surfaces difficiles d’accès.</span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="2.4rem">
            <S.ContentImage
              $width="75%"
              src={ContentImage}
              alt="Complete Care Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
