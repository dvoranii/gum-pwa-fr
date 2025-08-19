import * as S from "./ToothbrushSpecialty.styles";
import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import Slide1Brush1 from "../../../assets/toothbrush/Specialty/Slide1/Slide1Brush1.webp";
import Slide1Brush2 from "../../../assets/toothbrush/Specialty/Slide1/Slide1Brush2.webp";
import Slide1Brush3 from "../../../assets/toothbrush/Specialty/Slide1/Slide1Brush3.webp";

import Slide1Col1TopImg from "../../../assets/toothbrush/Specialty/Slide1/Slide1Col1TopImg.webp";
import Slide1Col2TopImg from "../../../assets/toothbrush/Specialty/Slide1/Slide1Col2TopImg.webp";
import Slide1Col3TopImg from "../../../assets/toothbrush/Specialty/Slide1/Slide1Col3TopImg.webp";

import TravelBrushImage from "../../../assets/toothbrush/Specialty/Slide2/Slide2Brush1.webp";
import DentureBrushImage from "../../../assets/toothbrush/Specialty/Slide2/Slide2Brush2.webp";
import TravelBrushDiagram from "../../../assets/toothbrush/Specialty/Slide2/Slide2Col1TopImg.webp";
import DentureBrushDiagram from "../../../assets/toothbrush/Specialty/Slide2/Slide2Col2TopImg.webp";
import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";
import { TitleLight } from "../components/ProductSlide/ProductSlide.styles";

import {
  BrushImgWrapper,
  BrushSpecsWrapper,
  SpecItem,
  SpecLabel,
  SpecValue,
} from "../components/ProductSlide/ProductSlide.styles";

export default function ToothbrushAdult() {
  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel
        $customStyles={{
          dotPosition: {
            bottom: "-30px",
            right: "34px",
          },
        }}
      >
        <S.CarouselSlide>
          <S.SlideContainer>
            <S.Column>
              <BrushImgWrapper $containerWidth="100%" $imgMinWidth="56px">
                <img src={Slide1Brush1} alt="Orthodontic toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter>
                <S.TextAndImgWrapper>
                  <S.DiagramsWrapper>
                    <img
                      src={Slide1Col1TopImg}
                      alt="Orthodontic brush head diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>
                      <TitleLight>Brosse à dents</TitleLight>
                      <br />
                      ORTHODONTIQUE
                    </h2>
                    <ul>
                      <li>
                        Les soies en forme de « V » de la brosse facilitent le
                        nettoyage autour des composantes d’un appareil
                        orthodontique, comme les boîtiers, les fils, les boutons
                        linguaux et les ligatures. Aussi oerte sous forme de
                        brosse de voyage.
                      </li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="100%">
                    <S.BrushSpecsGrid>
                      <SpecItem>
                        <SpecLabel>Article</SpecLabel>
                        <SpecValue>124</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Souple</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Coupe</SpecLabel>
                        <SpecValue>Coupe en V</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Tufts</SpecLabel>
                        <SpecValue>30</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            {/* End-Tuft Brush */}
            <S.Column>
              <BrushImgWrapper $containerWidth="100%" $imgMinWidth="55px">
                <img src={Slide1Brush2} alt="End-tuft brush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter>
                <S.TextAndImgWrapper>
                  <S.DiagramsWrapper>
                    <img
                      src={Slide1Col2TopImg}
                      alt="End-tuft brush head diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper $paddingRight="1.2rem">
                    <h2>
                      <TitleLight>Brosse à dents</TitleLight>
                      <br />
                      END-TUFT
                    </h2>
                    <ul>
                      <li>
                        Brosse dotée d’une petite tête pour répondre à des
                        besoins particuliers, notamment bagues orthodontiques,
                        furcations, implants, surfaces diciles à atteindre à
                        l'arrière des dernières molaires et autres endroits
                        diciles à nettoyer
                      </li>
                    </ul>
                    <br />
                    <br />
                    <br />
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="100%">
                    <S.BrushSpecsGrid>
                      <SpecItem>
                        <SpecLabel>Article</SpecLabel>
                        <SpecValue>308</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Soft</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Coupe</SpecLabel>
                        <SpecValue>Elée</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Touffes</SpecLabel>
                        <SpecValue>7</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            {/* Post-Operation Toothbrush */}
            <S.Column>
              <BrushImgWrapper $containerWidth="100%" $imgMinWidth="56px">
                <img src={Slide1Brush3} alt="Post-operation toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter>
                <S.TextAndImgWrapper>
                  <S.DiagramsWrapper>
                    <img
                      src={Slide1Col3TopImg}
                      alt="Post-operation brush head diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>
                      <TitleLight>Brosse à dents</TitleLight>
                      <br />
                      <TitleLight>POST-</TitleLight>OPERATION
                    </h2>
                    <ul>
                      <li>
                        Les soies ultrasouples de 0,10 mm de diamètre de cette
                        brosse sont idéales pour le nettoyage des dents après
                        une chirurgie ou en présence d’une maladie des gencives
                        ou d’irritation buccale, ou après l’extraction d’une
                        dent, la pose d’un implant ou une gree
                      </li>
                      <li>
                        Les soies sont extrêmement souples et douces pour les
                        gencives
                      </li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="100%">
                    <S.BrushSpecsGrid>
                      <SpecItem>
                        <SpecLabel>Article</SpecLabel>
                        <SpecValue>317</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Délicate</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Coupe</SpecLabel>
                        <SpecValue>Plate</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Touffes</SpecLabel>
                        <SpecValue>32</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>
          </S.SlideContainer>
        </S.CarouselSlide>

        <S.CarouselSlide>
          <S.SlideContainer $columns={2} $width="80%" $colGap="0">
            <S.Column>
              <BrushImgWrapper $containerWidth="50%" $brushImgHeight="83%">
                <img src={TravelBrushImage} alt="Travel toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="90%">
                <S.TextAndImgWrapper $height="85%" $padding="0">
                  <S.DiagramsWrapper $marginBottom="0.4rem" $width="75%">
                    <img src={TravelBrushDiagram} alt="Travel brush diagram" />
                  </S.DiagramsWrapper>
                  <S.TextWrapper $paddingRight="4.7rem" $listFontSize="1.1rem">
                    <h2>
                      <TitleLight>Brosse à dents</TitleLight>
                      <br />
                      DE VOYAGE
                    </h2>
                    <ul>
                      <li>
                        Le manche double fonction sert aussi de capuchon
                        verrouillable et aéré lorsque la brosse à dents n'est
                        pas utilisée
                      </li>
                      <li>
                        Diérentes coupes pour un meilleur accès sous la gencive
                        et entre les dents.
                      </li>
                      <li>
                        Également oert en version orthodontique, avec soies
                        coupées en « V »
                      </li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="65%">
                    <S.BrushSpecsGrid $gap="0">
                      {" "}
                      {/* New specialized grid */}
                      <SpecItem>
                        <SpecLabel>Article</SpecLabel>
                        <SpecValue>153</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Souple</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Coupe</SpecLabel>
                        <SpecValue>Multiniveaux</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Touffes</SpecLabel>
                        <SpecValue>32</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                    <S.BrushSpecsGrid $paddingTop="0.5rem" $gap="0">
                      <SpecItem>
                        <SpecValue>125</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecValue>Souple</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecValue>Coupe en V</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecValue>32</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            {/* Right Column - Denture Brush */}
            <S.Column>
              <BrushImgWrapper
                $containerWidth="50%"
                $brushImgHeight="83%"
                $imgMinWidth="101px"
              >
                <img src={DentureBrushImage} alt="Denture brush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="86.5%">
                <S.TextAndImgWrapper $height="80%" $padding="0">
                  <S.DiagramsWrapper $marginBottom="0.4rem" $width="43%">
                    <img
                      src={DentureBrushDiagram}
                      alt="Denture brush diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper $paddingRight="6.2rem" $listFontSize="1.1rem">
                    <h2>
                      <TitleLight>Brosse à dents</TitleLight>
                      <br />
                      PROTHÈSE DENTAIRE
                    </h2>
                    <ul>
                      <li>
                        Les soies fermes en nylon coupe plate nettoient
                        ecacement toutes les surfaces des prothèses dentaires,
                        tandis que la brosse conique permet d’atteindre les
                        endroits plus exigus
                      </li>
                      <li>
                        Le manche à prise à levier réduit les eorts pour les
                        personnes ayant une dextérité limitée
                      </li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="65%">
                    <S.BrushSpecsGrid $gap="0">
                      <SpecItem>
                        <SpecLabel>Article</SpecLabel>
                        <SpecValue>201</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Firm</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Coupe</SpecLabel>
                        <SpecValue>Plate</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Touffes</SpecLabel>
                        <SpecValue>33</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.shopify.com/ca"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>
          </S.SlideContainer>
        </S.CarouselSlide>
      </FlickityCarousel>
    </S.AdultWrapperOuter>
  );
}
