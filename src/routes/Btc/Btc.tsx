import * as S from "./Btc.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Col1Row2 from "../../assets/btc/crest.webp";
import PatientNeeds2 from "../../assets/btc/PatientNeeds.png";
import Technology2 from "../../assets/btc/Technology.png";
import Flossers from "../../assets/btc/column2-flossers.webp";

import PatientBG from "../../assets/btc/patient/PatientBG.webp";

const btcNavItems = [
  {
    path: "/btc",
    label: "Accueil\u00A0Nettoyeurs\u00A0Interdentaires",
    end: true,
  },
  { path: "/btc/tech", label: "Technologie" },
  { path: "/btc/patient", label: "Patient" },
  { path: "/btc/floss", label: "Fil\u00A0Dentaire" },
  { path: "/btc/flossers", label: "Porte-Fils\u00A0Dentaires" },
  { path: "/btc/id-brushes", label: "Brossettes\u00A0Interdentaires" },
  { path: "/btc/soft-picks", label: "Bâtonnets\u00A0Soft\u00A0Picks" },
  { path: "/recommend", label: "Recommander" },
];

export default function Toothbrush() {
  const location = useLocation();
  const isHomePage = location.pathname === "/btc";
  const isPatientRoute = location.pathname === "/btc/patient";

  const backgroundImage = isPatientRoute ? `${PatientBG}` : undefined;

  return (
    <ModuleContainer
      $isHomePage={isHomePage}
      $backgroundImage={backgroundImage}
    >
      <InnerNav navItems={btcNavItems} />
      <S.Content>
        {isHomePage ? (
          <S.FlossBG>
            <S.ContentLeft>
              <S.IntroTitleWrapper>
                <S.IntroTitle>
                  Solutions
                  <br />
                  interdentaires
                  <br />
                  de GUM<sup>MD</sup>
                </S.IntroTitle>
              </S.IntroTitleWrapper>
              <S.RecommendedWrapper>
                <S.Recommended src={Col1Row2} />
                <h3>
                  Recommandée
                  <br /> au&nbsp;Canada&nbsp;par&nbsp;les
                  <br />
                  hygiénistes&nbsp;dentaires
                  <sup>7</sup>
                </h3>
              </S.RecommendedWrapper>
              <S.LinksWrapper>
                <S.StyledLink to="/btc/tech">
                  <S.LinkContent>
                    <S.LinkImg src={Technology2} />
                    <S.LinkText>
                      Technologie
                      <br />
                      <br />
                    </S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
                <S.StyledLink to="/btc/patient">
                  <S.LinkContent>
                    <S.LinkImg src={PatientNeeds2} />
                    <S.LinkText>Besoins des patients</S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>
              <S.FlossersImg src={Flossers} />
            </S.ContentRight>
          </S.FlossBG>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
