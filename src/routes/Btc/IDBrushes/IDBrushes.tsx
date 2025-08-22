import * as S from "./IDBrushes.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";
import ProxabrushSizingChart from "./ProxabrushSizingChart/ProxabrushSizingChart";

import TriangularBristlesImg from "../../../assets/btc/id-brushes/triangular-bristles-circle-img.webp";
import ConventionalBristlesImg from "../../../assets/btc/id-brushes/conventional-bristles-circle-img.webp";

import Slide1Row1Graphic2 from "../../../assets/btc/id-brushes/Slide1Row1Graphic2.webp";

import Slide2Row2Graphic1 from "../../../assets/btc/id-brushes/Slide2Row2Graphic1.webp";
import AngleCleaners from "../../../assets/btc/id-brushes/angle-cleaners.webp";

import Slide3Graphic1 from "../../../assets/btc/id-brushes/Slide3Graphic1.webp";
import Slide3Graphic2 from "../../../assets/btc/id-brushes/Slide3Graphic2.webp";

export default function BtcIDBrushes() {
  return (
    <S.IDBrushesContainer>
      <FlickityCarousel
        $customStyles={{
          viewportHeight: "80vh",
          dotPosition: {
            bottom: "-28px",
            right: "44px",
          },
        }}
      >
        {/* SLIDE 1 */}
        <BaseCarouselSlide>
          <S.SlideWrapperInner>
            <S.Row1WrapperOuter>
              <S.Row1WrapperInner>
                <S.TextWrapperOuter>
                  <S.TextWrapper>
                    <h2>
                      BROSSETTES INTERDENTAIRES <span>PROXA</span>BRUSH
                      <sup>MD</sup>
                    </h2>
                    <p>
                      Oertes dans toute une gamme de tailles pour répondre aux
                      besoins uniques de chaque patient.
                    </p>

                    <S.ListContainer>
                      <ul>
                        <li>
                          Les soies triangulaires délogent jusqu'à 25 % plus de
                          plaque que les soies rondes traditionnelles.
                          <sup>1</sup>
                        </li>
                        <li>
                          Nettoyage facile des dents arrière grâce au manche
                          flexible.
                        </li>
                        <li>
                          Le manche flexible recouvert de caoutchouc ore une
                          prise confortable et ferme pour un meilleur contrôle.
                        </li>
                        <li>
                          La brossette demeure propre entre les utilisations
                          grâce à ses soies antibactériennes.
                          <sup>2</sup>
                        </li>
                      </ul>
                    </S.ListContainer>
                  </S.TextWrapper>
                </S.TextWrapperOuter>

                <S.DiagramSection>
                  <S.BristlesWrapper>
                    <S.BristlesTextWrapper>
                      <p>
                        Les soies triangulaires délogent jusqu'à 25 % plus de
                        plaque que les soies rondes traditionnelles<sup>1</sup>
                      </p>
                    </S.BristlesTextWrapper>
                    <S.BristlesImagesContainer>
                      <S.BristlesImgWrapper>
                        <img
                          src={TriangularBristlesImg}
                          alt="Triangular Bristles"
                        />
                        <S.BristleLabel>
                          Soies
                          <br />
                          triangulaires
                        </S.BristleLabel>
                      </S.BristlesImgWrapper>
                      <S.BristlesImgWrapper>
                        <img
                          src={ConventionalBristlesImg}
                          alt="Conventional Round Bristles"
                        />
                        <S.BristleLabel>
                          Soies rondes
                          <br />
                          traditionnelles
                        </S.BristleLabel>
                      </S.BristlesImgWrapper>
                    </S.BristlesImagesContainer>
                  </S.BristlesWrapper>

                  <S.FeatureCallouts>
                    <S.NylonCallout $marginTop="12px">
                      <p>
                        Le fil métallique recouvert de nylon prévient les chocs
                        galvaniques
                      </p>
                    </S.NylonCallout>
                    <S.AntibacterialCallout>
                      <S.AntibacterialBadge>
                        <span>Soies</span>
                        <span>
                          antibactériennes<sup>9</sup>
                        </span>
                      </S.AntibacterialBadge>
                    </S.AntibacterialCallout>
                  </S.FeatureCallouts>
                </S.DiagramSection>
              </S.Row1WrapperInner>
              <S.ImgWrapper1>
                <img src={Slide1Row1Graphic2} />
              </S.ImgWrapper1>
            </S.Row1WrapperOuter>
            <S.SizingDiagramContainer>
              <ProxabrushSizingChart />
            </S.SizingDiagramContainer>
          </S.SlideWrapperInner>
        </BaseCarouselSlide>

        {/* SLIDE 2 */}

        <BaseCarouselSlide>
          <S.SlideWrapperInner>
            <S.SlideRow1>
              <S.Row1WrapperInner2 $paddingBottom="0.4rem">
                <S.TextWrapper>
                  <h2>
                    NETTOYEURS ANGULAIRES PROXABRUSH<sup>MD</sup>
                  </h2>
                  <S.ListContainer $paddingBottom="0">
                    <ul>
                      <li>
                        Les soies triangulaires délogent 25 % plus de plaque que
                        les soies rondes traditionnelles.<sup>1</sup>
                      </li>
                      <li>
                        La tête à angle aide les patients à atteindre les
                        surfaces interdentaires diciles d'accès.
                      </li>
                      <li>
                        La forme de petit cylindre (3012) permet à la brossette
                        de s'insérer dans des espaces aussi petits que 0,9 mm,
                        la forme conique (3014) s'insère dans des espaces ne
                        mesurant que 1,2 mm.
                      </li>
                      <li>Vient avec un boîtier de voyage.</li>
                    </ul>
                  </S.ListContainer>
                </S.TextWrapper>
                <S.BristlesAndNylonWrapper $flex="0.9">
                  <S.NylonCallout
                    $padding="10px"
                    $fontSize="13px"
                    $marginRight="36px"
                    $width="80%"
                  >
                    <p>
                      Le fil métallique recouvert de nylon
                      <br /> prévient les chocs galvaniques
                    </p>
                  </S.NylonCallout>
                  <S.BristlesAndAntiBacterialWrapper>
                    <img src={AngleCleaners} />
                    <S.AntibacterialCallout>
                      <S.AntibacterialBadge>
                        <span>Soies</span>
                        <span>
                          antibactériennes<sup>9</sup>
                        </span>
                      </S.AntibacterialBadge>
                    </S.AntibacterialCallout>
                  </S.BristlesAndAntiBacterialWrapper>
                </S.BristlesAndNylonWrapper>
              </S.Row1WrapperInner2>
              <S.InfoGrid>
                <S.InfoGridRow>
                  <S.Column>
                    <S.ColoredCircle color="#ffde00">●</S.ColoredCircle>
                    <span>
                      3012 PROXABRUSH<sup>MD</sup> Interdentaires Angulaires
                    </span>
                  </S.Column>
                  <S.Column $centered>Cylindrique</S.Column>
                  <S.Column>36/box</S.Column>
                </S.InfoGridRow>
                <S.InfoGridRow>
                  <S.Column>
                    <S.ColoredCircle color="#68bd45">●</S.ColoredCircle>
                    <span>
                      3014 PROXABRUSH<sup>MD</sup> Interdentaires Angulaires
                    </span>
                  </S.Column>
                  <S.Column $centered>Conique</S.Column>
                  <S.Column>36/box</S.Column>
                </S.InfoGridRow>
                <ShopifyIcon
                  href="https://www.shopify.com/ca"
                  width="30px"
                  marginTop="0px"
                />
              </S.InfoGrid>
            </S.SlideRow1>
            <S.SlideRow2>
              <S.Row1WrapperInner2>
                <S.TextAndImgWrapper>
                  <S.TextWrapper2>
                    <h2>
                      PROXABRUSH<sup>MD</sup> ORIGINAL MANCHE ET RECHARGES
                    </h2>
                    <p>
                      Idéal pour les patients qui ont besoin d’aide pour
                      nettoyer les surfaces interproximales postérieures.
                    </p>
                    <S.ListContainer>
                      <ul>
                        <li>
                          Le manche à deux extrémités permet de passer
                          facilement d’une taille de brosse à une autre pour
                          nettoyer les surfaces interproximales.
                        </li>
                        <li>
                          Le manche ergonomique étroit est facile à manipuler et
                          procure un contrôle supérieur.
                        </li>
                        <li>
                          Les soies triangulaires délogent jusqu'à 25 % plus de
                          plaque que les soies rondes traditionnelles.
                          <sup>1</sup>
                        </li>
                      </ul>
                    </S.ListContainer>
                  </S.TextWrapper2>
                  <S.ImgInnerWrapper>
                    <S.NylonCallout
                      $padding="12px 18px"
                      $fontSize="14px"
                      $width="80%"
                    >
                      <p>
                        Le fil métallique recouvert de nylon prévient les chocs
                        galvaniques
                      </p>
                    </S.NylonCallout>
                    <img src={Slide2Row2Graphic1} />
                  </S.ImgInnerWrapper>
                </S.TextAndImgWrapper>
                <S.BristleAndAntibacterialWrapper>
                  <S.BristlesImgWrapper2>
                    <img
                      src={TriangularBristlesImg}
                      alt="Triangular Bristles"
                    />
                  </S.BristlesImgWrapper2>
                  <S.AntibacterialCallout>
                    <S.AntibacterialBadge>
                      <span>Soies</span>
                      <span>
                        antibactériennes<sup>9</sup>
                      </span>
                    </S.AntibacterialBadge>
                  </S.AntibacterialCallout>
                </S.BristleAndAntibacterialWrapper>
              </S.Row1WrapperInner2>
              <S.InfoGrid $gridColumns="2fr 1fr">
                <S.InfoGridRow>
                  <S.Column>
                    <S.ColoredCircle hidden={true}>●</S.ColoredCircle>
                    <span>611 Manche original</span>
                  </S.Column>
                  <S.Column>12/boite</S.Column>
                </S.InfoGridRow>
                <S.InfoGridRow>
                  <S.Column>
                    <S.ColoredCircle color="#6dcd47">●</S.ColoredCircle>
                    <span>414 Recharges Petit</span>
                  </S.Column>
                  <S.Column>18 sachets de 2</S.Column>
                </S.InfoGridRow>
                <S.InfoGridRow>
                  <S.Column>
                    <S.ColoredCircle color="#a00e58">●</S.ColoredCircle>
                    <span>612 Recharges Moyen</span>
                  </S.Column>
                  <S.Column>18 sachets de 2</S.Column>
                </S.InfoGridRow>
                <S.InfoGridRow>
                  <S.Column>
                    <S.ColoredCircle color="#12b7cc">●</S.ColoredCircle>
                    <span>614 Recharges Large</span>
                  </S.Column>
                  <S.Column>18 sachets de 2</S.Column>
                </S.InfoGridRow>
                <ShopifyIcon
                  href="https://www.shopify.com/ca"
                  width="30px"
                  marginTop="0px"
                />
              </S.InfoGrid>
            </S.SlideRow2>
          </S.SlideWrapperInner>
        </BaseCarouselSlide>

        {/* SLIDE 3 */}

        <BaseCarouselSlide>
          <S.Slide3WrapperOuter>
            <S.Slide3WrapperInner>
              <S.Slide3ImgAndTextWrapper>
                <h2>BROSSE À SULCUS</h2>
                <S.ListContainer>
                  <ul>
                    <li>
                      La brosse à une seule tête déloge la plaque le long de la
                      ligne gingivale pour favoriser la santé des gencives.
                    </li>
                    <li>
                      Soies antibactériennes souples qui procurent un nettoyage
                      ecace et tout en douceur.<sup>2</sup>
                    </li>
                    <li>
                      Les deux têtes à angle facilitent l’accès à toutes les
                      régions de la bouche, y compris à la ligne gingivale
                      linguale (A) et à la ligne gingivale buccale (B).
                    </li>
                    <li>
                      Manche Proxabrush<sup>MD</sup> à deux extrémités dotées
                      d’un mécanisme à déclic facile à utiliser.
                    </li>
                  </ul>
                </S.ListContainer>
                <S.ImgWrapper>
                  <img src={Slide3Graphic1} />
                </S.ImgWrapper>
              </S.Slide3ImgAndTextWrapper>
              <S.ImgWrapper5>
                <img src={Slide3Graphic2} />
                <S.AntibacterialCallout>
                  <S.AntibacterialBadge $width="110px">
                    <span>Soies</span>
                    <span>
                      antibactériennes<sup>9</sup>
                    </span>
                  </S.AntibacterialBadge>
                </S.AntibacterialCallout>
              </S.ImgWrapper5>
            </S.Slide3WrapperInner>
            <S.InfoGrid2>
              <S.InfoGridRow>
                <S.Column>642</S.Column>
                <S.Column>1 manche (2 recharges)</S.Column>
                <S.Column>12/boite</S.Column>
              </S.InfoGridRow>
              <ShopifyIcon
                href="https://www.shopify.com/ca"
                width="30px"
                marginTop="8px"
              />
            </S.InfoGrid2>
            <S.CaptionWrapper>
              <small>
                1. Données internes (DOF-0001)&nbsp;&nbsp;&nbsp;2. DOF-0046
              </small>
            </S.CaptionWrapper>
          </S.Slide3WrapperOuter>
        </BaseCarouselSlide>
      </FlickityCarousel>
      {/* <ShopifyIcon />                                                     */}
    </S.IDBrushesContainer>
  );
}
