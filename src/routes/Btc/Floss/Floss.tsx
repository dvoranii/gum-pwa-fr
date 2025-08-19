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
              <small>
                (anciennement EEZ-THRU<sup>MD</sup>)
              </small>
              <S.ListContainer>
                <ul>
                  <li>
                    Fil dentaire non collant qui glisse facilement entre les
                    zones de contact, même les plus étroites, et sous la ligne
                    gingivale.
                  </li>
                  <li>
                    Grâce à son monofilament, il est incroyablement robuste.
                  </li>
                  <li>Son fini satiné est lisse et doux pour les gencives.</li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>2010 Comfort Slide</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2014 Comfort Slide Menthe</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2006 Comfort Slide Menthe</S.Column>
                    <S.Column>2x40m</S.Column>
                    <S.Column>12/sac</S.Column>
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
              <S.ColumnTitle>
                FIL DENTAIRE TORSADÉ Dual-Defense<sup>MD</sup>
              </S.ColumnTitle>
              <S.ListContainer>
                <ul>
                  <li>
                    Fil texturé et torsadé à saveur de thé vert à la menthe.
                  </li>
                  <li>
                    Déloge 2 fois plus de plaque<sup>1</sup>.
                  </li>
                  <li>
                    Couvre <span>30 % plus</span> de surface dentaire
                    <sup>2</sup>.
                  </li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>
                      2008 Dual-Defence<sup>MD</sup> Ciré
                    </S.Column>
                    <S.Column>3.6mm</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>
                      2008C Dual-Defence<sup>MD</sup> Ciré menthe
                    </S.Column>
                    <S.Column>2x35m</S.Column>
                    <S.Column>12/sac</S.Column>
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
              <S.ColumnTitle>Deep Clean Fil Expanding</S.ColumnTitle>
              <S.ListContainer>
                <ul>
                  <li>
                    Mince et facile d'insertion, même dans les contacts serrés.
                  </li>
                  <li>
                    Le fil prend de l'expansion pendant son utilisation pour
                    retirer <span>2 fois plus</span> de plaque<sup>1</sup>.
                  </li>
                  <li>
                    Son fil à plusieurs filaments et à fibres texturées ore un
                    nettoyage exceptionnel
                  </li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>2030 Deep Clean Fil Expanding Ciré</S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>2030T Deep Clean Fil Expanding Ciré</S.Column>
                    <S.Column>2x40 m</S.Column>
                    <S.Column>12/sac</S.Column>
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
              <small>
                (anciennement BUTLERWEAVE<sup>MD</sup>)
              </small>
              <S.ListContainer>
                <ul>
                  <li>
                    Déloge <span>2 fois plus</span> de plaque<sup>1</sup>.
                  </li>
                  <li>
                    Son tissage unique permet de retirer ecacement le biofilm
                    entre les dents et sous la gencive.
                  </li>
                  <li>
                    Le processus d'entrelacement unique produit un fil solide et
                    lisse qui ne s'eloche pas, ne casse pas et ne s'aaisse pas
                    <sup>3</sup>.
                  </li>
                </ul>

                <S.InfoGrid>
                  <S.InfoGridRow>
                    <S.Column>
                      1115 PRO-WEAVE<sup>MD</sup> Ciré
                    </S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>
                      1815 PRO-WEAVE<sup>MD</sup> Ciré menthe
                    </S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>
                      1415 PRO-WEAVE<sup>MD</sup> Ciré Tutti Frutti
                    </S.Column>
                    <S.Column>3.6m</S.Column>
                    <S.Column>144/boite</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>
                      1140 PRO-WEAVE<sup>MD</sup> Ciré
                    </S.Column>
                    <S.Column>165 m</S.Column>
                    <S.Column>12/sac</S.Column>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column>
                      1840 PRO-WEAVE<sup>MD</sup> Ciré menthe
                    </S.Column>
                    <S.Column>165 m</S.Column>
                    <S.Column>12/sac</S.Column>
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
                    Ce fil dentaire mince et résistant à l’elochage glisse
                    aisément entre les dents serrées et sous la ligne gingivale.
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
              <S.ImgWrapper $width={"70%"}>
                <img src={Slide3Floss2} />
              </S.ImgWrapper>
              <S.ColumnTitle>
                FIL DENTAIRE <span>Easy</span>Thread<sup>MD</sup>
              </S.ColumnTitle>
              <p>
                Le fil dentaire EasyThread<sup>MD</sup> de GUM<sup>MD</sup> est
                conçu pour faciliter le passage du fil dentaire avec des
                appareils orthodontiques, des ponts et des implants.
              </p>
              <S.ListContainer $marginTop="0px">
                <ul>
                  <li>
                    Des sections raides d'enfilage facilitent l'accès aux zones
                    diciles à nettoyer sans irriter la gencive.
                  </li>
                  <li>
                    Les sections d'enfilage aux deux bouts maximisent le
                    nettoyage obtenu avec chaque fil.
                  </li>
                  <li>
                    En cours d’utilisation, le fil se gonfle pour enlever le
                    plus de plaque possible.
                  </li>
                  <li>
                    Oert dans un distributeur novateur et hygiénique qui
                    contribue à réduire les nœuds et les pertes.
                  </li>
                  <li>
                    Le distributeur pour cabinet dentaire comporte un mécanisme
                    de rembobinage qui permet de prélever uniquement la bonne
                    longueur de fil.
                  </li>
                </ul>

                <S.InfoGrid $gridCols="1.45fr 1fr" $paddingTop="0.4rem">
                  <S.InfoGridRow>
                    <S.Column2>
                      3200 Fil dentaire EasyThread<sup>MD</sup>
                      <br />
                      Sachet pour patient
                    </S.Column2>
                    <S.Column2>1 boite / 100 sachets de 5</S.Column2>
                  </S.InfoGridRow>
                  <S.InfoGridRow>
                    <S.Column2>
                      3210 Distributeurs de fil dentaire
                      <br />
                      EasyThread<sup>MD</sup> pour la clinique
                    </S.Column2>
                    <S.Column2>1 boite / 6 distributeurs de 50</S.Column2>
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
                ENFILEURS <span>EEZ-</span>THRU<sup>MD</sup>
              </S.ColumnTitle>
              <S.ListContainer
                $flexGrow="0"
                $width="50%"
                $listFontSize="16px"
                $listPaddingBottom="0.8rem"
              >
                <ul>
                  <li>
                    Boucle de nylon polyvalente qui aide à passer le fil là où
                    la plupart des autres produits ne peuvent pénétrer, par
                    exemple sous les ponts et les fils linguaux, entre deux
                    couronnes attachées et autour des appareils d’orthodontie et
                    des implants.
                  </li>
                </ul>
              </S.ListContainer>
              <S.InfoGrid
                $marginTop="0"
                $paddingTop="0.4rem"
                $gridCols="2fr 1.2fr"
                $width="60%"
              >
                <S.InfoGridRow>
                  <S.Column2>
                    840 Enfileurs Eez-Thru<sup>MD</sup>
                  </S.Column2>
                  <S.Column2>1 boîte / 100 enveloppes de 5</S.Column2>
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
