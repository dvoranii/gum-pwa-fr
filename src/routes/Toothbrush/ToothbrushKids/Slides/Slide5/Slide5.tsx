import * as S from "./Slide5.styles";
import Brush1_CrayolaPower from "../../../../../assets/toothbrush/Kids/Slide5/Brush-Crayola-Power.webp";
import Slide5Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide5/circle-diagram-crayolaPower.webp";
import Slide5Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide5/Slide5Col2Img.webp";
import Slide5Col2BottomImg from "../../../../../assets/toothbrush/Kids/Slide5/Slide5Col2Fruits.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import {
  TitleLight,
  Container,
} from "../../../components/ProductSlide/ProductSlide.styles";
import ShopifyIcon from "../../../../../components/ShopifyIcon/ShopifyIcon";

const Slide5 = () => (
  <Container>
    <ProductSlide
      brushImage={Brush1_CrayolaPower}
      diagramImage={Slide5Col1TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={false}
      minHeight="226px"
      diagramWidth="90%"
      diagramMarginBottom="0.2rem"
      paddingRight="1.4rem"
      brushImgWidth="95%"
      colGap="0.8rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="1.2rem"
      title={
        <>
          <TitleLight>Brosse à dents</TitleLight>
          <br />
          DE VOYAGE Crayola<sup>MC</sup>
        </>
      }
      description={[
        "L'action rotative des soies souples nettoie doucement les dents et les gencives",
        "Vient avec un capuchon pour maintenir la propreté de la tête de la brosse à dents, qui est aussi pratique pour le voyage",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
        "Pile non remplaçable",
      ]}
      imprintColors={[["#c2519e"], ["#f67f1e"], ["#00aeee"], ["#39b549"]]}
      specs={[
        [
          { label: "Article", value: "2272" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "23" },
        ],
      ]}
    />

    <S.SecondColumnWrapper>
      <S.TopImageWrapper>
        <img src={Slide5Col2TopImg} />
      </S.TopImageWrapper>

      <S.ContentWrapper>
        <S.TextContent>
          <h2>
            PORTE-FIL Crayola
            <TitleLight>
              <sup>MC</sup>
            </TitleLight>{" "}
            TWISTABLES
            <TitleLight>
              <sup>MC</sup>
            </TitleLight>
          </h2>
          <ul>
            <li>Fil dentaire robuste, torsadé et enduit de fluorure</li>
            <li>
              Le manche plus long permet aux parents d'aider leur enfant à
              passer le fil dentaire
            </li>
            <li>
              Possibilité de choisir parmi 3 saveurs fruitées agréables afin de
              varier les plaisirs et d’encourager les enfants à passer le fil
            </li>
          </ul>
        </S.TextContent>
        <S.BottomImageWrapper>
          <img src={Slide5Col2BottomImg} alt="Fruit flavors" />
        </S.BottomImageWrapper>
      </S.ContentWrapper>
      <S.SpecsSection>
        <S.SpecsGrid>
          <S.SpecItem>
            853 Porte-file Crayola<sup>MC</sup> Twistables<sup>MC</sup>
          </S.SpecItem>
          <S.SpecItem>48 emballages de 3</S.SpecItem>
        </S.SpecsGrid>
      </S.SpecsSection>
      <ShopifyIcon
        href="https://www.shopify.com/ca"
        width="30px"
        marginTop="0"
      />
    </S.SecondColumnWrapper>
  </Container>
);

export default Slide5;
