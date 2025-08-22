import * as S from "./DualDefence.styled";

import ColRightFloss from "../../../../../assets/btc/tech/ColRightFloss.webp";
import TeethFlossDiagram from "../../../../../assets/btc/tech/tooth-floss-diagram.webp";
import BottomRowFloss from "../../../../../assets/btc/tech/BottomRowFloss.webp";

export default function DualDefence() {
  return (
    <S.ContentWrapper>
      <S.TopRow>
        <S.ColumnLeft>
          <S.MainTitle>
            Dual-Defence<sup>MD</sup> de GUM<sup>MD</sup> Fil dentaire torsadé
          </S.MainTitle>
          <S.Description>
            <li>Fil dentaire torsadé à la menthe.</li>
            <li>
              Élimine 2x plus de plaque.<sup>10</sup>
            </li>
          </S.Description>
          <S.ImgTextWrapper>
            <S.ImgWrapper>
              <img src={TeethFlossDiagram} />
            </S.ImgWrapper>
            <S.TextWrapper>
              <h2>30% de plus</h2>
              <p>
                Couvre une surface 30% plus grande<sup>11</sup>
              </p>
            </S.TextWrapper>
          </S.ImgTextWrapper>
        </S.ColumnLeft>
        <S.ColumnRight>
          <S.ColRightDiagramWrapper>
            <img src={ColRightFloss} />
          </S.ColRightDiagramWrapper>
        </S.ColumnRight>
      </S.TopRow>
      <S.BottomRow>
        <img src={BottomRowFloss} />
      </S.BottomRow>
    </S.ContentWrapper>
  );
}
