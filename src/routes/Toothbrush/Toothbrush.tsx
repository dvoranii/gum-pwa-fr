import * as S from "./Toothbrush.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Col1Row2 from "../../assets/toothbrush/crest.webp";
import PatientNeeds2 from "../../assets/toothbrush/PN.png";
import Technology2 from "../../assets/toothbrush/Tech.png";
import Brushes from "../../assets/toothbrush/toothbrush-new.webp";

import PatientBG from "../../assets/toothbrush/patient/PatientBG.webp";

const toothbrushNavItems = [
  {
    path: "/toothbrush",
    label: "Accueil\u00A0Brosses\u00A0Interdentaires",
    end: true,
  },
  { path: "/toothbrush/tech", label: "Technologie" },
  { path: "/toothbrush/patient", label: "Patient" },
  { path: "/toothbrush/adult", label: "Adulte" },
  { path: "/toothbrush/kids", label: "Enfants" },
  { path: "/toothbrush/specialty", label: "Spécialité" },
  { path: "/recommend", label: "Recommend" },
];

export default function Toothbrush() {
  const location = useLocation();
  const isHomePage = location.pathname === "/toothbrush";
  const isPatientRoute = location.pathname === "/toothbrush/patient";

  const backgroundImage = isPatientRoute ? `${PatientBG}` : undefined;

  return (
    <ModuleContainer
      $isHomePage={isHomePage}
      $backgroundImage={backgroundImage}
    >
      <InnerNav navItems={toothbrushNavItems} />
      <S.Content>
        {isHomePage ? (
          <S.BrushBG>
            <S.ContentLeft>
              <S.IntroTitleWrapper>
                <S.IntroTitle>
                  Gum <br />
                  Toothbrush
                  <br /> Solutions
                </S.IntroTitle>
              </S.IntroTitleWrapper>
              <S.RecommendedWrapper>
                <S.Recommended src={Col1Row2} />
                <h3>
                  Recommended
                  <br /> By Canadian
                  <br /> Dental&nbsp;Hygienists<sup>7</sup>
                </h3>
              </S.RecommendedWrapper>

              <S.LinksWrapper>
                <S.StyledLink to="/toothbrush/tech">
                  <S.LinkContent>
                    <S.LinkImg src={Technology2} />
                    <S.LinkText>Technology</S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
                <S.StyledLink to="/toothbrush/patient">
                  <S.LinkContent>
                    <S.LinkImg src={PatientNeeds2} />
                    <S.LinkText>Patient Needs</S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>
              <S.BrushesImg src={Brushes} />
            </S.ContentRight>
          </S.BrushBG>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
