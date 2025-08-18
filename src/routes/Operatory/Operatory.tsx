import * as S from "./Operatory.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import MonsterzImg from "../../assets/operatory/monsterz-image.webp";
import MonsterzLogo from "../../assets/operatory/monsterz-logo-text.webp";
import Fruits from "../../assets/operatory/fruits.webp";

const operatoryNavItems = [
  { path: "/operatory", label: "Solutions\u00A0opératoires ", end: true },
  { path: "/recommend", label: "Recommander" },
];

export default function Operatory() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/operatory";

  return (
    <ModuleContainer>
      <InnerNav navItems={operatoryNavItems} />

      <S.Content>
        {isHomeRoute ? (
          <S.OperatoryWrapper>
            <S.OperatoryWrapperInner>
              <S.ColLeft>
                <S.Row1>
                  <S.ImgWrapper1>
                    <img src={MonsterzLogo} />
                  </S.ImgWrapper1>
                  <small>Idéal pour les enfants et les adultes</small>
                  <S.ListContainer>
                    <ul>
                      <li>
                        Assortiment unique (45 doses avec 15 unités de chaque
                        saveur)
                      </li>
                      <li>
                        Saveurs éprouvées par les adultes et les enfants
                        (menthe, fraise, cerise)
                      </li>
                      <li>
                        Contient du fluorure de sodium à 5,0 % W/W (équivalent à
                        2,26 % d'ions de fluorure)
                      </li>
                      <li>
                        Disponible en plateaux unidoses de 0,4 ml, scellés
                        individuellement avec applicateur
                      </li>
                      <li>Apparence lisse et claire après l'application</li>
                      <li>Sans gluten, sans BPA, sucré avec du xylitol</li>
                      <li>
                        Libération rapide du fluorure et ore une absorption
                        ecace du fluorure dans l'émail déminéralisé
                      </li>
                    </ul>
                  </S.ListContainer>
                </S.Row1>
                <S.Row2>
                  <S.Row2Inner>
                    <p>1219 Boite assortie (cerise, menthe et fraise)</p>
                    <S.TextImgWrapper>
                      <p>45/boite</p>
                      <S.ImgWrapper2>
                        <img src={Fruits} />
                      </S.ImgWrapper2>
                    </S.TextImgWrapper>
                  </S.Row2Inner>
                </S.Row2>
              </S.ColLeft>
              <S.ColRight>
                <S.ImgWrapper3>
                  <img src={MonsterzImg} />
                </S.ImgWrapper3>
              </S.ColRight>
            </S.OperatoryWrapperInner>
          </S.OperatoryWrapper>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
