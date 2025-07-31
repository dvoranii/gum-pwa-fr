import React from "react";
import * as S from "./SoftPicks.styled";

import BrushHand from "../../../../../assets/btc/tech/SoftPicks.webp";
import DiagramCrossSection from "../../../../../assets/btc/tech/gums-teeth-diagram.webp";

export default function ProxaTriangular() {
  return (
    <S.ContentWrapper>
      <S.HeaderRight>
        <S.MainTitle>
          Soft-Picks<sup>MD</sup> Évolués de GUM<sup>MD</sup>
        </S.MainTitle>
        <S.Description>
          <li>Manche courbé long pour une meilleure manipulation.</li>
          <li>
            Cliniquement prouvé pour éliminer 22% de plaque en plus que le
            brossage seul<sup>23</sup>.
          </li>
        </S.Description>

        <S.DiagramSection>
          <S.CrossSectionWrapper>
            <S.CrossSectionDiagram>
              <img src={DiagramCrossSection} alt="Cross section front" />
            </S.CrossSectionDiagram>
          </S.CrossSectionWrapper>
        </S.DiagramSection>
      </S.HeaderRight>

      <S.SoftPickImage>
        <img src={BrushHand} alt="Hand holding toothbrush" />
      </S.SoftPickImage>
    </S.ContentWrapper>
  );
}
