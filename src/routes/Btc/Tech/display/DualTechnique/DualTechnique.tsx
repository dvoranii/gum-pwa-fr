import * as S from "./DualTechnique.styled";

import FlossDiagram from "../../../../../assets/btc/tech/FlossDiagram.webp";
import MintFlavour from "../../../../../assets/btc/tech/MintFlavour.webp";

export default function DualTechnique() {
  return (
    <S.ContentWrapper>
      <S.TopRow>
        <S.ColumnLeft>
          <S.MainTitle>
            Porte-fils Dual Technique<sup>MD</sup> de GUM<sup>MD</sup>
          </S.MainTitle>
          <S.Description>
            <li>
              Deux têtes spécialement conçues pour accéder aux dents antérieures
              et postérieures.
            </li>
            <li>
              Fil dentaire torsadé à la menthe sur la tête à angle qui élimine
              2x plus plaque<sup>10</sup> et couvre une surface 30% plus grande.
              <sup>11</sup>
            </li>
          </S.Description>
          <S.ImgWrapper>
            <img src={MintFlavour} />
          </S.ImgWrapper>
        </S.ColumnLeft>
        <S.ColumnRight>
          <S.ColRightDiagramWrapper>
            <img src={FlossDiagram} />
          </S.ColRightDiagramWrapper>
        </S.ColumnRight>
      </S.TopRow>
    </S.ContentWrapper>
  );
}
