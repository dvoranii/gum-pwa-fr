import * as S from "./Slide6.styles";
import SpongeBobBrush from "../../../../../assets/toothbrush/Kids/Slide6/Brush-SpongeBob.webp";
import SpongeBobDiagram from "../../../../../assets/toothbrush/Kids/Slide6/Slide6Col1Circle.webp";
import SpongeBobVariants from "../../../../../assets/toothbrush/Kids/Slide6/SpongeBobBrushVariants.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { Container } from "../../../components/ProductSlide/ProductSlide.styles";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide6 = () => (
  <Container>
    <ProductSlide
      brushImage={SpongeBobBrush}
      diagramImage={SpongeBobDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={false}
      minHeight="250px"
      diagramWidth="90%"
      diagramMarginBottom="0.8rem"
      paddingRight="0"
      textWrapperPaddingRight="4.5rem"
      brushImgWidth="90%"
      colGap="0.8rem"
      colMargLeft="39px"
      textWrapperH2MarginBottom="0.4rem"
      title={
        <>
          <TitleLight>Brosse à dents</TitleLight> Bob L'éponge<sup>MC</sup>
        </>
      }
      description={[
        <>
          Le nettoyeur de langue qui aide à éliminer les bactéries sur la langue
        </>,
        "Les soies centrales servent d’aide visuelle pour enseigner aux enfants la bonne quantité de dentifrice à utiliser",
        "Base à ventouse gardant la brosse propre et verticale",
      ]}
      imprintColors={[["#ffff00"], ["#ff1493"]]}
      specs={[
        [
          { label: "Article", value: "4060" },
          { label: "Texture", value: "Ultrasouple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "29" },
        ],
      ]}
    />

    <S.SecondColumnWrapper>
      <S.ImageWrapper>
        <img src={SpongeBobVariants} alt="SpongeBob Toothbrush Variants" />
      </S.ImageWrapper>
    </S.SecondColumnWrapper>
  </Container>
);

export default Slide6;
