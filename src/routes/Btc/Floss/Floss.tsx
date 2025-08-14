import * as S from "./Floss.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";

import Slide1Floss1 from "../../../assets/btc/floss/Slide1Floss1.webp";
import Slide1Floss2 from "../../../assets/btc/floss/Slide1Floss2.webp";

import Slide2Floss1 from "../../../assets/btc/floss/Slide2Floss1.webp";
import Slide2Floss2 from "../../../assets/btc/floss/Slide2Floss2.png";

import Slide3Floss1 from "../../../assets/btc/floss/Slide3Floss.webp";
import Slide3Floss2 from "../../../assets/btc/floss/Slide3Floss2.webp";

import Slide4Floss from "../../../assets/btc/floss/Slide4Floss.webp";

export default function BtcFloss() {
  return (
    <S.FlossWrapperOuter>
      <FlickityCarousel
        $customStyles={{
          viewportHeight: "80vh",
          dotPosition: {
            bottom: "-28px",
            right: "44px",
          },
        }}
      >
        {/* Slide 1 */}

        <BaseCarouselSlide>
          <S.SlideWrapper>
            <S.SlideColumn1>
              <S.ImgWrapper $width={"85%"}>
                <img src={Slide1Floss1} />
              </S.ImgWrapper>
              <S.ColumnTitle>FIL DENTAIRE Comfort Slide</S.ColumnTitle>
              {/* <small>(formerly known as EEZ-THRU)®</small>  */}
              <S.ListContainer>
                <ul>
                  <li>
                    Fil dentaire soyeux et non collant qui glisse sans effort.
                  </li>
                  <li>Construction robuste en monofilament.</li>
                  <li>Fini satiné qui est doux et léger.</li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>2010 Comfort Slide</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/box</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2014 Comfort Slide Mint</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/box</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2006 Comfort Slide Mint</S.Column>
                    <S.Column>2x40m</S.Column>
                    <S.Column>12/bag</S.Column>
                  </S.InfoGridRow>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                    width="30px"
                    marginTop="4px"
                  />
                </S.InfoGrid>
              </S.ListContainer>
            </S.SlideColumn1>
            <S.SlideColumn2>
              <S.ImgWrapper $width={"85%"}>
                <img src={Slide1Floss2} />
              </S.ImgWrapper>
              <S.ColumnTitle>FIL DENTAIRE TORSADÉ Dual-Defense</S.ColumnTitle>
              <S.ListContainer>
                <ul>
                  <li>Fil dentaire torsadé, saveur de menthe fraîche.</li>
                  <li>
                    Élimine <span>2x plus de plaque</span>
                    <sup>10</sup>
                  </li>
                  <li>
                    Couvre une surface <span>30% plus</span> grande<sup>11</sup>
                    .
                  </li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>2008 Dual-Defence Waxed Mint</S.Column>
                    <S.Column>3.6mm</S.Column>
                    <S.Column>144/box</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                    <S.Column>2x35m</S.Column>
                    <S.Column>12/bag</S.Column>
                  </S.InfoGridRow>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                    width="30px"
                    marginTop="4px"
                  />
                </S.InfoGrid>
                <br />
              </S.ListContainer>
            </S.SlideColumn2>
          </S.SlideWrapper>
        </BaseCarouselSlide>

        {/* Slide 2 */}

        <BaseCarouselSlide>
          <S.SlideWrapper>
            <S.SlideColumn1>
              <S.ImgWrapper $width={"85%"}>
                <img src={Slide2Floss1} />
              </S.ImgWrapper>
              <S.ColumnTitle>FIL DENTAIRE Deep Clean Expanding</S.ColumnTitle>
              <S.ListContainer>
                <ul>
                  <li>
                    Mince et facile à insérer entre les zones de contact
                    étroites.
                  </li>
                  <li>
                    Fil dentaire qui se dilate pour éliminer{" "}
                    <span>2x plus de plaque</span>
                    <sup>10</sup>.
                  </li>
                  <li>Plusieurs filaments et fibres texturées.</li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>2010 Comfort Slide</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/box</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2014 Comfort Slide Mint</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/box</S.Column>
                  </S.InfoGridRow>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                    width="30px"
                    marginTop="4px"
                  />
                </S.InfoGrid>
                <br />
                <br />
                <br />
                <br />
                <br />
              </S.ListContainer>
            </S.SlideColumn1>
            <S.SlideColumn2>
              <S.ImgWrapper $width={"100%"}>
                <img src={Slide2Floss2} />
              </S.ImgWrapper>
              <S.ColumnTitle>
                FIL DENTAIRE Pro-Weave<sup>MD</sup>
              </S.ColumnTitle>
              {/* <small>(formerly known as BUTLERWEAVE)®</small> */}
              <S.ListContainer>
                <ul>
                  <li>
                    Conception tissée qui élimine le biofilm entre les dents et
                    sous la ligne gingivale.
                  </li>
                  <li>
                    Processus d’entrelacement qui produit un fil dentaire
                    résistant et lisse conçu pour ne pas s’effilocher, se briser
                    ou se déformer<sup>13</sup>.
                  </li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>2008 Dual-Defence Waxed Mint</S.Column>
                    <S.Column>3.6mm</S.Column>
                    <S.Column>144/box</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                    <S.Column>2x35m</S.Column>
                    <S.Column>12/bag</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                    <S.Column>2x35m</S.Column>
                    <S.Column>12/bag</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                    <S.Column>2x35m</S.Column>
                    <S.Column>12/bag</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                    <S.Column>2x35m</S.Column>
                    <S.Column>12/bag</S.Column>
                  </S.InfoGridRow>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                    width="30px"
                    marginTop="4px"
                  />
                </S.InfoGrid>
              </S.ListContainer>
            </S.SlideColumn2>
          </S.SlideWrapper>
        </BaseCarouselSlide>

        {/* Slide 3 */}
        <BaseCarouselSlide>
          <S.SlideWrapper>
            <S.SlideColumn1>
              <S.ImgWrapper $width={"85%"}>
                <img src={Slide3Floss1} />
              </S.ImgWrapper>
              <S.ColumnTitle>FIL DENTAIRE Fin</S.ColumnTitle>
              <S.ListContainer $flexGrow="0">
                <ul>
                  <li>
                    Fil mince, résistant à l’effilochage, pour nettoyer les
                    espaces interdentaires étroits et sous la ligne gingivale
                    <sup>13</sup>.
                  </li>
                </ul>

                <S.InfoGrid $marginTop="0" $paddingTop="0.4rem">
                  <S.InfoGridRow>
                    <S.Column2>1940 Fine Waxed Mint</S.Column2>
                    <S.Column2>165m</S.Column2>
                    <S.Column2>12/bag</S.Column2>
                  </S.InfoGridRow>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                    width="30px"
                    marginTop="4px"
                  />
                </S.InfoGrid>
              </S.ListContainer>
            </S.SlideColumn1>
            <S.SlideColumn2>
              <S.ImgWrapper $width={"80%"}>
                <img src={Slide3Floss2} />
              </S.ImgWrapper>
              <S.ColumnTitle>
                FIL DENTAIRE <span>Easy</span>Thread<sup>MD</sup>
              </S.ColumnTitle>
              {/* <small>(formerly known as EEZ-THRU)®</small> */}
              {/* <p>
                GUM® EasyThread® Floss is designed to make flossing around
                braces, bridges, and implants easy.
              </p> */}
              <S.ListContainer>
                <ul>
                  <li>
                    Sections dotées d’enfileur de fil dentaire rigide intégré
                    qui facilitent l’accès aux espaces difficiles à nettoyer
                    sans irriter les gencives.
                  </li>
                  <li>
                    Sections dotées d’enfileur à deux extrémités pour maximiser
                    le nettoyage avec chaque passage de fil.
                  </li>
                  {/* <li>
                    Features "puffy" floss designed for enhanced plaque removal
                  </li>
                  <li>
                    Innovative, hygienic packaging reduces tangles and waste
                  </li>
                  <li>
                    Office dispenser is rewindable to ensure just the right
                    amount of floss is dispensed
                  </li> */}
                </ul>

                <S.InfoGrid $gridCols="1.65fr 1fr" $paddingTop="0.4rem">
                  <S.InfoGridRow>
                    <S.Column2>3200 EasyThread® Floss Patient Packs</S.Column2>
                    <S.Column2>1 pkg. / 100 env of 5</S.Column2>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column2>
                      3210 EasyThread® Floss Office Dispensers
                    </S.Column2>
                    <S.Column2>1 pkg. / 6 dispensers of 50</S.Column2>
                  </S.InfoGridRow>
                </S.InfoGrid>
              </S.ListContainer>
              <ShopifyIcon
                href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                width="30px"
                marginTop="4px"
              />
            </S.SlideColumn2>
          </S.SlideWrapper>
        </BaseCarouselSlide>

        {/* Slide 4 */}

        <BaseCarouselSlide>
          <S.SlideWrapper $width="80%">
            <S.SlideColumn1>
              <S.ImgWrapper $width={"50%"} $marginLeft="-36px;">
                <img src={Slide4Floss} />
              </S.ImgWrapper>
              <S.ColumnTitle>
                PASSE-FIL DENTAIRE <span>EEZ-</span>THRU<sup>MD</sup>
              </S.ColumnTitle>
              <S.ListContainer
                $flexGrow="0"
                $width="50%"
                $listFontSize="16px"
                $listPaddingBottom="0.8rem"
              >
                <ul>
                  <li>
                    Boucle de nylon polyvalente qui aide à insérer le fil
                    dentaire dans les espaces interdentaires non accessibles à
                    la plupart des autres produits.
                  </li>
                </ul>
              </S.ListContainer>
              <S.InfoGrid
                $marginTop="0"
                $paddingTop="0.4rem"
                $gridCols="2fr 1fr"
                $width="60%"
              >
                <S.InfoGridRow>
                  <S.Column2>840 Eez-Thru® Floss Threaders</S.Column2>
                  <S.Column2>1 box/ 100 env. of 5</S.Column2>
                </S.InfoGridRow>
              </S.InfoGrid>
              <ShopifyIcon
                href="https://www.shopify.com/ca-fr?country=ca&lang=fr"
                width="30px"
                marginTop="4px"
              />
            </S.SlideColumn1>
          </S.SlideWrapper>
        </BaseCarouselSlide>
      </FlickityCarousel>
      {/* <ShopifyIcon /> */}
    </S.FlossWrapperOuter>
  );
}
