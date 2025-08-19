import * as S from "./Accessories.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Slide1Row1Img from "../../assets/accessories/Slide1Row1Img.webp";
import Slide1Row2Img from "../../assets/accessories/Slide1Row2Img.webp";
import Slide2Row1Img from "../../assets/accessories/Slide2Row1Img.webp";
import Slide2Row2Img from "../../assets/accessories/Slide2Row2Img.webp";

import ShopifyIcon from "../../components/ShopifyIcon/ShopifyIcon";
import FlickityCarousel from "../../components/FlickityCarousel/FlickityCarousel";

const accessoriesNavItems = [
  { path: "/accessories", label: "Accessoires", end: true },
  { path: "/recommend", label: "Recommander" },
];

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: "center",
};

export default function Accessories() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/accessories";

  return (
    <ModuleContainer>
      <InnerNav navItems={accessoriesNavItems} />

      <S.Content>
        {isHomeRoute ? (
          <S.AccessoriesWrapperOuter>
            <FlickityCarousel
              options={flickityOptions}
              $customStyles={{
                viewportHeight: "78vh",
                dotPosition: {
                  bottom: "-6vw",
                  right: "24px",
                },
              }}
            >
              <S.Slide $top="10%">
                <S.Row>
                  <S.RowWrapperInner $gap={"1.2rem"}>
                    <S.TextWrapper>
                      <h2>
                        <span>Cire</span> ORTHODONTIQUE
                      </h2>
                      <S.ListContainer>
                        <ul>
                          <li>
                            Cire transparente qui adhère aux
                            <br /> appareils orthodontiques pour aider
                            <br /> à soulager les tissus irrités
                          </li>
                        </ul>
                      </S.ListContainer>
                    </S.TextWrapper>
                    <S.ImgWrapper>
                      <img src={Slide1Row1Img} />
                    </S.ImgWrapper>
                  </S.RowWrapperInner>
                  <S.MetaDataWrapper $width={"50%"}>
                    <p>723 Cire orthodontique avec vitamine E</p>
                    <p>24/boite</p>
                  </S.MetaDataWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="6px"
                  />
                </S.Row>
                <S.Row>
                  <S.RowWrapperInner $gap={"1.2rem"}>
                    <S.TextWrapper>
                      <h2>CAPUCHONS DE VOYAGE</h2>
                      <S.ListContainer>
                        <ul>
                          <li>
                            Rendez les soins buccaux de vos patients en
                            déplacement plus pratiques et plus portatifs
                          </li>
                          <li>
                            Le revêtement antibactérien garde les brosses à
                            dents plus propres entre les utilisations
                            <sup>1</sup>
                          </li>
                          <li>
                            Conviennent à la plupart des modèles de brosses à
                            dents
                          </li>
                        </ul>
                      </S.ListContainer>
                    </S.TextWrapper>
                    <S.ImgWrapper>
                      <img src={Slide1Row2Img} />
                    </S.ImgWrapper>
                  </S.RowWrapperInner>
                  <S.MetaDataWrapper $width={"50%"}>
                    <p>152 Capuchons de voyage</p>
                    <p>12/boite</p>
                  </S.MetaDataWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="6px"
                  />
                </S.Row>
              </S.Slide>
              <S.Slide>
                <S.Row>
                  <S.RowWrapperInner $gap="2.4rem">
                    <S.TextWrapper>
                      <h2>
                        SIMULATEUR
                        <br />
                        <span>MANCHE ET RECHARGES</span>
                      </h2>
                      <S.ListContainer>
                        <ul>
                          <li>
                            L’embout en caoutchouc sert à masser les gencives et
                            à nettoyer les espaces interproximaux
                          </li>
                          <li>
                            Le col élancé et en angle assure une bonne
                            maniabilité partout dans la bouche
                          </li>
                        </ul>
                      </S.ListContainer>
                    </S.TextWrapper>
                    <S.ImgWrapper $width={"100%"} $flex={"1.3"}>
                      <img src={Slide2Row1Img} />
                    </S.ImgWrapper>
                  </S.RowWrapperInner>
                  <S.MetaDataWrapper $width={"372px"}>
                    <p>600 Manche</p>
                    <p>12/sac</p>
                  </S.MetaDataWrapper>
                  <S.MetaDataWrapper $width={"546px"}>
                    <p>601 Recharges</p>
                    <p>12 paquets avec 3 recharges</p>
                  </S.MetaDataWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="6px"
                  />
                </S.Row>
                <S.Row>
                  <S.RowWrapperInner $gap="1.2rem" $paddingBottom="0.8rem">
                    <S.TextWrapper>
                      <h2>
                        GRATTE-LANGUE <span>2 en 1</span>
                      </h2>
                      <S.ListContainer>
                        <ul>
                          <li>
                            Ce gratte-langue possède deux rangées de soies qui
                            atteignent les petits creux et plis de la surface de
                            la langue pour déloger les bactéries et les résidus
                            alimentaires
                          </li>
                          <li>
                            Ce gratte-langue possède deux rangées de grattoirs
                            qui enlèvent doucement les bactéries et les résidus
                            alimentaires tout en nettoyant la surface de la
                            langue
                          </li>
                          <li>
                            La tête étroite réduit le réflexe de haut-le-cœur
                          </li>
                        </ul>
                      </S.ListContainer>
                    </S.TextWrapper>
                    <S.ImgWrapper $width={"100%"} $flex={"1.3"}>
                      <img src={Slide2Row2Img} />
                    </S.ImgWrapper>
                  </S.RowWrapperInner>
                  <S.MetaDataWrapper $width={"45%"}>
                    <p>760 Gratte-langue</p>
                    <p>12/boite</p>
                  </S.MetaDataWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="6px"
                  />
                </S.Row>
              </S.Slide>
            </FlickityCarousel>
          </S.AccessoriesWrapperOuter>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
