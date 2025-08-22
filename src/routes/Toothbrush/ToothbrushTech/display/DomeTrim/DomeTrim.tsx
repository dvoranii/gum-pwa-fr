import * as S from "./DomeTrim.styled";
import TaperedBristlesDiagram from "../../../../../assets/toothbrush/tech/TaperedBristlesImg1.webp";
import BristlesDiagramRightCol from "../../../../../assets/toothbrush/tech/ColRightBristlesDiagram.webp";

export default function TaperedBristles() {
  return (
    <S.ContentWrapper>
      <S.ColumnLeft>
        <S.MainTitle>
          GUM<sup>MD</sup> Soies
          <br /> Dome Trim<sup>MD</sup>
        </S.MainTitle>
        <S.Description>
          <li>
            Il est cliniquement prouvé que les soies douces Dome Trim<sup>MD</sup>
            &nbsp;nettoient sous la gencive<sup>18, 19</sup>, là où commence la
            maladie parodontale. La structure en dôme des soies favorise le
            maintien de l&#39;angle recommandé de 45° lors de l&#39;utilisation
            de la technique modifiée de Bass.
          </li>
        </S.Description>
        <S.ColLeftImgWrapper>
          <img src={TaperedBristlesDiagram} />
        </S.ColLeftImgWrapper>
        <S.ColLeftList>
          <li>
            Offert sur les brosses à dents Technique<sup>MD</sup> Soins
            complets, Technique<sup>MD</sup> Soins sensibles, Technique
            <sup>MD</sup> Classique, Super Tip<sup>MD</sup>, Dome Trim
            <sup>MD</sup>, GUM Bright Care<sup>MC</sup>, Enamel Clean Technique<sup>MD</sup>.
          </li>
        </S.ColLeftList>
      </S.ColumnLeft>
      <S.ColumnRight>
        <S.BristlesDiagramWrapper>
          <img src={BristlesDiagramRightCol} />
        </S.BristlesDiagramWrapper>
      </S.ColumnRight>
    </S.ContentWrapper>
  );
}
