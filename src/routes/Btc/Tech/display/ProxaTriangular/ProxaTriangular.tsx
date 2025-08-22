import React from "react";
import * as S from "./ProxaTriangular.styled";

import BrushHand from "../../../../../assets/btc/tech/ProxabrushGraphic.webp";
import DiagramCrossSection from "../../../../../assets/btc/tech/diagram-cross-section.webp";

export default function ProxaTriangular() {
  return (
    <S.ContentWrapper>
      <S.HeaderRight>
        <S.MainTitle>
          Proxabrush<sup>MD</sup> de GUM<sup>MD</sup>
        </S.MainTitle>
        <S.Description>
          <li>
            Soies de forme triangulaire qui éliminent 25% plus de plaque
            dentaire que les soies rondes conventionnelles.<sup>8</sup>
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
            Fil métallique recouvert de nylon qui aide à prévenir les chocs
            galvaniques.
          </S.BenefitItem>
          <S.BenefitItem>
            Col pliable avec manche en caoutchouc souple.
          </S.BenefitItem>
        </S.BenefitsList>
      </S.HeaderRight>

      <S.HandImage>
        <img src={BrushHand} alt="Hand holding toothbrush" />
      </S.HandImage>
    </S.ContentWrapper>
  );
}
