import * as S from "./TaperedBristles.styles";
import TaperedBristlesDiagram from "../../../../../assets/toothbrush/tech/ColLeftExtremeBristle.webp";
import ExtremelyTaperedColRightImg from "../../../../../assets/toothbrush/tech/ExtremelyTaperedColRight.webp";

export default function TaperedBristles() {
  return (
    <S.ContentWrapper>
      <S.ColumnLeft>
        <S.MainTitle>
          GUM<sup>MD</sup> Soies extrêmement efflées
        </S.MainTitle>
        <S.Description>
          <li>
            La conception de précision des soies extrêmement effilées leur
            permet de pénétrer profondément pour nettoyer jusqu&#39;à 2,7 mm
            dans le sillon gingival et jusqu&#39;à 1,4 cm le long de la gencive
            et entre les dents1. Les 6 mm à l&#39;extrémité des soies sont
            effilés jusqu&#39;à une pointe arrondie de 0,01 mm. Normalement, les
            soies arrondies font moins de 0,5 mm et sont effilées à 0,02 mm.<sup>14</sup>
          </li>
        </S.Description>
        <S.ColLeftImgWrapper>
          <img src={TaperedBristlesDiagram} />
        </S.ColLeftImgWrapper>
        <S.ColLeftList>
          <li>
            Offert pour les brosses à dents Technique<sup>MD</sup> Deep Clean et
            Technique<sup>MD</sup> Sensitive Clean.
          </li>
        </S.ColLeftList>
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.BristlesDiagramWrapper>
          <img src={ExtremelyTaperedColRightImg} />
        </S.BristlesDiagramWrapper>
      </S.ColumnRight>
    </S.ContentWrapper>
  );
}
