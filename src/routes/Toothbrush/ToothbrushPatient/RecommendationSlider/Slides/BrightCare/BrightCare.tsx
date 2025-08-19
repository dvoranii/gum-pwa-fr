import * as S from "../ToothbrushSlide.styles";
import ToothbrushImage from "../../../../../../assets/toothbrush/4594-BrightCare.webp";

export default function BrightCareSlide() {
  return (
    <S.Container $padding="2.4rem 0 0 2.4rem">
      <S.SlideContent $gap="1rem">
        <S.ToothbrushImageWrapper>
          <S.ToothbrushImage
            src={ToothbrushImage}
            alt="Complete Care Technique Toothbrush"
          />
        </S.ToothbrushImageWrapper>
        <S.TextAndImgWrapper>
          <S.TitlesWrapper>
            <S.Title $fontSize="3rem" $letterSpacing="-2px">
              BROSSE À DENTS
            </S.Title>
            <S.Subtitle>
              Bright Care<sup>MC</sup>
            </S.Subtitle>
          </S.TitlesWrapper>

          <S.BulletList
            $letterSpace="-0.8px"
            $paddingRight="2.8rem;"
            $lineHeight="1.2"
          >
            <li>
              <span>
                Les soies BrightLine<sup>MD</sup> Grip améliorent de 28 % la
                blancheur des dents après utilisation.
                <sup>21</sup>
              </span>
            </li>
            <li>
              <span>
                Les soies Super Tip<sup>MD</sup> surélevées situées à
                l’extrémité de la brosse facilitent l’accès aux zones
                postérieures et nettoient les surfaces difficiles d’accès.
              </span>
            </li>
            <li>
              <span>
                Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
                nettoyer sous la ligne gingivale.<sup>18,19</sup>
              </span>
            </li>
          </S.BulletList>
        </S.TextAndImgWrapper>
      </S.SlideContent>
    </S.Container>
  );
}
