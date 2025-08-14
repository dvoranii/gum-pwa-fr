import * as S from "./Flossers.styles";
import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import { BaseCarouselSlide } from "../../../styles/shared-styles";
import Slide1Graphic from "../../../assets/btc/flosser/Slide1Graphic.webp";
import Slide2Graphic from "../../../assets/btc/flosser/Slide2Graphic.webp";
import Slide2GraphicSmall from "../../../assets/btc/flosser/Asset2.png";
import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";

export default function BtcFlossers() {
  return (
    <S.FlossersContainer>
      <FlickityCarousel
        $customStyles={{
          viewportHeight: "80vh",
          dotPosition: {
            bottom: "-28px",
            right: "44px",
          },
        }}
      >
        <BaseCarouselSlide>
          <S.SlideWrapper>
            <S.SlideColumn1>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Eco Clean<sup>MD</sup>
                    <br />
                  </span>{" "}
                  <span>Soins écologiques</span> <span>À LA MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Le fil dentaire texturé efficace élimine 2x plus de plaque
                      <sup>10</sup>.
                    </li>
                    <li>Conçu pour résister à l’effilochage ou au bris</li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Twisted Mint<sup>MD</sup>
                  </span>{" "}
                  <span>Menthe torsadée</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Élimine 2x plus de plaque<sup>10</sup> et couvre une
                      surface 30% plus grande<sup>11</sup>.
                    </li>
                    <li>
                      Prise souple et légère qui utilise 20% moins de plastique
                      <sup>13</sup>.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Insertion facile<sup>MD</sup>
                  </span>{" "}
                  <span>À LA MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Fil dentaire soyeux et non collant à la menthe qui glisse
                      facilement entre les zones de contact les plus étroites.
                    </li>
                    <li>
                      Prise souple et légère qui utilise 20% moins de plastique
                      <sup>13</sup>.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Soins intenses<sup>MD</sup>
                  </span>{" "}
                  <span>À LA MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Fil dentaire durable enduit de vitamine E et de fluorure.
                    </li>
                    <li>
                      Conçu pour résister à l'effilochage et au bris
                      <sup>12</sup>.
                    </li>
                    <li>
                      Prise souple et légère qui utilise 20% moins de plastique
                      <sup>13</sup>.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Soins professionnels<sup>MD</sup>
                  </span>{" "}
                  <span>À LA MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Le fil dentaire texturé efficace élimine 2x plus de plaque
                      <sup>10</sup>.
                    </li>
                    <li>
                      Conçu pour résister à l'effilochage ou au bris
                      <sup>12</sup>.
                    </li>
                    <li>
                      Prise souple et légère qui utilise 20% moins de plastique
                      <sup>13</sup>.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
            </S.SlideColumn1>
            <S.SlideColumn2>
              <S.ImgWrapper>
                <img src={Slide1Graphic} />
                <ShopifyIcon
                  href="https://www.shopify.com/ca"
                  absolute
                  width="30px"
                  bottom="35px"
                  right="38px"
                />
              </S.ImgWrapper>

              <S.InfoGrid>
                <S.Row>
                  <S.Column>831 Eco Clean™ Flosser Mint</S.Column>
                  <S.Column>48 packs of 2</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>828 Twisted Mint™ Flosser</S.Column>
                  <S.Column>48 packs of 3</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>887 Comfort Slide Flossers Mint</S.Column>
                  <S.Column>48 packs of 2</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>
                    888 Advanced Care Flossers Mint + Vit E & Fluoride
                  </S.Column>
                  <S.Column>48 packs of 3</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>891 Professional Clean Flossers Mint</S.Column>
                  <S.Column>48 packs of 3</S.Column>
                </S.Row>
              </S.InfoGrid>
            </S.SlideColumn2>
          </S.SlideWrapper>
        </BaseCarouselSlide>

        {/* Slide 2 */}

        <BaseCarouselSlide>
          <S.SlideWrapper $marginLeft="24px" $gap="0.3rem">
            <S.SlideColumn1>
              <S.TitleListWrapper $paddingTop="0">
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Soins professionnels plus<sup>MD</sup>
                  </span>{" "}
                  <span>À LA MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Embout en caoutchouc spécialement conçu pour masser les
                      gencives tout en éliminant délicatement les débris.
                    </li>
                    <li>
                      Fil dentaire durable conçu pour glisser facilement entre
                      les dents et résister à l'effilochage ou au bris
                      <sup>12</sup>.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>

              <S.TitleListWrapper $paddingTop="1.2rem">
                <h4>
                  <span>PORTE-FIL DENTAIRE</span>{" "}
                  <span>
                    Dual Technique<sup>MD</sup>
                  </span>
                  <br /> <span>À LA MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Deux têtes conçues pour accéder aux dents avant et
                      arrière.
                    </li>
                    <li>
                      Fil dentaire torsadé à la menthe sur la tête à angle qui
                      élimine 2x plus de plaque<sup>10</sup> et couvre une
                      surface 30% plus grande<sup>11</sup>.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>

              <S.ImgWrapper2>
                <img src={Slide2GraphicSmall} />
              </S.ImgWrapper2>
            </S.SlideColumn1>
            <S.SlideColumn2>
              <S.ImgWrapper>
                <img src={Slide2Graphic} />
              </S.ImgWrapper>
              <S.InfoGrid $width="90%">
                <S.Row>
                  <S.Column>885 Professional Clean PLUS Flosser Mint</S.Column>
                  <S.Column>48 packs of 2</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>821 Dual Technique® Flossers Mint</S.Column>
                  <S.Column>48 packs of 3</S.Column>
                </S.Row>
                <ShopifyIcon
                  href="https://www.shopify.com/ca"
                  width="30px"
                  marginTop="4px"
                />
              </S.InfoGrid>
            </S.SlideColumn2>
          </S.SlideWrapper>
        </BaseCarouselSlide>
      </FlickityCarousel>
      {/* <ShopifyIcon/> */}
    </S.FlossersContainer>
  );
}
