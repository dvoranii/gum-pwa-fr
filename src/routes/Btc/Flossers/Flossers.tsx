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
                  <span>PORTE-FIL Eco</span>{" "}
                  <span>
                    CLEAN<sup>MD</sup>
                  </span>{" "}
                  <span className="bold-menthe">MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Le fil dentaire texturé élimine efficacement 2 fois plus
                      de plaque<sup>2</sup> et est conçu pour résister à
                      l'elochage et au bris.<sup>5</sup>
                    </li>
                    <li>
                      Manche léger fabriqué à partir de matériaux à base de
                      plantes.
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL Twisted</span>{" "}
                  <span>
                    {" "}
                    Mint<sup>MC</sup>
                  </span>{" "}
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Fil dentaire torsadé qui élimine 2 fois plus de plaque
                      <sup>2</sup> et couvre 30 % plus de surface dentaire.
                    </li>
                    <li>
                      Prise souple et légère avec 20 % moins de plastique.
                      <sup>4</sup>
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL</span> <span>INSERTION</span>{" "}
                  <span>Facile</span> <span>MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Fil soyeux et antiadhérent qui glisse aisément dans les
                      contacts les plus serrés et tout en douceur.
                    </li>
                    <li>
                      Prise souple et légère avec 20 % de plastique en moins.
                      <sup>4</sup>
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FILE</span> <span>SOINS</span>{" "}
                  <span>Intenses</span> <span>MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Du fil dentaire durable enduit de vitamine E et de fluor
                      est conçu pour résister à l'effilochage et au bris.
                      <sup>5</sup>
                    </li>
                    <li>
                      Prise souple et légère avec 20 % de plastique en moins.
                      <sup>4</sup>
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>
              <S.TitleListWrapper>
                <h4>
                  <span>PORTE-FIL</span> <span>SOINS</span>{" "}
                  <span>Professionnels</span> <span>MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Le fil dentaire texturé élimine ecacement 2 fois plus de
                      plaque2 et est conçu pour résister à l'effilochage et au
                      bris.
                      <sup>5</sup>
                    </li>
                    <li>
                      Prise souple et légère qui utilise 20 % moins de
                      plastique.
                      <sup>13</sup>
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
                  <S.Column>
                    831 Porte-fil Eco Clean<sup>MD</sup> menthe
                  </S.Column>
                  <S.Column>48 sachets de 2</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>
                    828 Porte-fil Twisted Mint<sup>MC</sup>
                  </S.Column>
                  <S.Column>48 sachets de 3</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>887 Porte-fil Insertion facile menthe</S.Column>
                  <S.Column>48 sachets de 2</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>
                    888 Porte-fil Soins Intenses menthe + Vit E & fluorure
                  </S.Column>
                  <S.Column>48 sachets de 3</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>891 Porte-fil Soins Professionnels menthe</S.Column>
                  <S.Column>48 sachets de 3</S.Column>
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
                  <span>PORTE-FIL</span> <span>SOINS Professionnels</span>
                  <br />
                  <span>PLUS</span> <span>MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Cure-dent en caoutchouc de conception unique qui masse les
                      gencives tout en délogeant doucement les débris.
                    </li>
                    <li>
                      Fil dentaire robuste conçu pour glisser facilement entre
                      les dents et résister à l'elochage ou à la rupture.
                      <sup>5</sup>
                    </li>
                  </ul>
                </S.ListContainer>
              </S.TitleListWrapper>

              <S.TitleListWrapper $paddingTop="1.2rem">
                <h4>
                  <span>PORTE-FIL</span> <span>Dual</span>{" "}
                  <span>
                    Technique<sup>MD</sup>
                  </span>{" "}
                  <span>MENTHE</span>
                </h4>
                <S.ListContainer>
                  <ul>
                    <li>
                      Deux têtes pour nettoyer les dents avant et les dents
                      arrière diciles à atteindre.
                    </li>
                    <li>
                      Fil dentaire torsadé du côté incliné qui élimine 2 fois
                      plus de plaque2 et couvre 30 % plus de surface dentaire.
                      <sup>3</sup>
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
                  <S.Column>
                    885 Porte-fil Soins Professionnels PLUS menthe
                  </S.Column>
                  <S.Column>48 sachets de 2</S.Column>
                </S.Row>
                <S.Row>
                  <S.Column>
                    821 Porte-fil Dual Technique<sup>MD</sup> menthe
                  </S.Column>
                  <S.Column>48 sachets de 2</S.Column>
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
