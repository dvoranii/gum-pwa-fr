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
    label: "Accueil\u00A0brosses\u00A0interdentaires",
    end: true,
  },
  { path: "/toothbrush/tech", label: "Technologie" },
  { path: "/toothbrush/patient", label: "Patient" },
  { path: "/toothbrush/adult", label: "Adulte" },
  { path: "/toothbrush/kids", label: "Enfants" },
  { path: "/toothbrush/specialty", label: "Spécialité" },
  { path: "/recommend", label: "Recommander" },
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
                  GUM<sup>MD</sup>
                  <br />
                  brosses à dents
                  <br />
                  solutions
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
                <S.StyledLink to="/toothbrush/tech">
                  <S.LinkContent>
                    <S.LinkImg src={Technology2} />
                    <S.LinkText>
                      Technologie
                      <br />
                      <br />
                    </S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
                <S.StyledLink to="/toothbrush/patient">
                  <S.LinkContent>
                    <S.LinkImg src={PatientNeeds2} />
                    <S.LinkText>Besoins des patients</S.LinkText>
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
