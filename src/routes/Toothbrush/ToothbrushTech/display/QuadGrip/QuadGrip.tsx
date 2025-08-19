import React from "react";
import * as S from "./QuadGrip.styles";

import BrushHand from "../../../../../assets/toothbrush/tech/hand-brush.webp";
import DiagramCrossSection from "../../../../../assets/toothbrush/tech/diagram-cross-section.webp";

export default function QuadGripDisplay() {
  return (
    <S.ContentWrapper>
      <S.HeaderRight>
        <S.MainTitle>
          GUM<sup>MD</sup> Appuie-pouce Quad-Grip<sup>MD</sup> Thumb Pad
        </S.MainTitle>
        <S.Description>
          <li>
            Le manche Quad-Grip<sup>MD</sup> a été conçu pour aider à maintenir
            les soies à un angle de 45°, peu importe où l&#39;on brosse, afin
            qu&#39;elles soient toujours placées correctement dans le sillon
            pour bien nettoyer sous la gencive.
          </li>
        </S.Description>

        <S.DiagramSection>
          <S.CrossSectionWrapper>
            <S.CrossSectionDiagram>
              <img src={DiagramCrossSection} alt="Cross section front" />
            </S.CrossSectionDiagram>
          </S.CrossSectionWrapper>
        </S.DiagramSection>

        <S.BenefitsList>
          <S.BenefitItem>
            L&#39;appuie-pouce du manche Quad-Grip<sup>MD</sup> favorise la
            technique de Bass modifiée.
          </S.BenefitItem>
          <S.BenefitItem>
            Offert sur toutes les brosses Technique<sup>MD</sup>.
          </S.BenefitItem>
        </S.BenefitsList>
      </S.HeaderRight>

      <S.HandImage>
        <img src={BrushHand} alt="Hand holding toothbrush" />
      </S.HandImage>
    </S.ContentWrapper>
  );
}
