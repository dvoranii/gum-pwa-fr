import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/Adult/Slide4/Brush-toothAndTongue.webp";
import ContentImage from "../../../../../../assets/toothbrush/patient/recommendations/DeepClean/394-T&T-BottomImg.webp";

export default function ToothAndTongueSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="0.8rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Sensitive Clean Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="clamp(24px, 6vw, 3.2rem)" $letterSpacing="-2px">
              Dents et langue
            </S.Title>
            <S.Subtitle>BROSSES À DENTS</S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="2.4rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                40 % plus de soies<sup>22</sup>.
              </span>
            </li>
            <li>
              <span>Nettoie entre les dents sans irriter les gencives.</span>
            </li>
            <li>
              <span>
                Gratte-langue doté de stries intégrées qui améliore le nettoyage
                et réduit la mauvaise haleine.
              </span>
            </li>
          </S.BulletList>

          <S.ContentImageWrapper $marginTop="0" $justifyContent="center">
            <S.ContentImage
              $width="32%"
              src={ContentImage}
              alt="Sensitive Clean Technique features and benefits"
            />
          </S.ContentImageWrapper>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
