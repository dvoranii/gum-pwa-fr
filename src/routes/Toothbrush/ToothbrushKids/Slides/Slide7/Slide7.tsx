import TechniqueKidsBrush from "../../../../../assets/toothbrush/Kids/Slide7/Brush-TechniqueKids.webp";
import TechniqueClassicBrush from "../../../../../assets/toothbrush/Kids/Slide7/Brush-TechniqueClassic.webp";
import TechniqueKidsDiagram from "../../../../../assets/toothbrush/Kids/Slide7/circle-diagram-TechniqueKids.webp";
import TechniqueClassicDiagram from "../../../../../assets/toothbrush/Kids/Slide7/circle-diagram-TechniqueClassic.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide7 = () => (
  <>
    <ProductSlide
      brushImage={TechniqueKidsBrush}
      diagramImage={TechniqueKidsDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={false}
      minHeight="168px"
      diagramWidth="80%"
      diagramMarginBottom="1.2rem"
      paddingRight="2rem"
      brushImgWidth="95%"
      colGap="1.2rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="3rem"
      title={
        <>
          <TitleLight>Brosse à dents</TitleLight>
          <br />
          TECHNIQUE<sup>MD</sup> pour Enfant
        </>
      }
      description={[
        <>
          Le manche coussiné Quad-Grip<sup>MD</sup> facilite la technique de
          brossage recommandée à 45°
        </>,
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la gencive<sup>1,2</sup>
        </>,
      ]}
      imprintColors={[
        ["#01b6d8", "#fff300"],
        ["#b04d9c", "#0363b0"],
        ["#f7941d", "#fff301"],
        ["#8dc63e", "#0164b2"],
      ]}
      specs={[
        [
          { label: "Article", value: "221" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "24" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={TechniqueClassicBrush}
      diagramImage={TechniqueClassicDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={true}
      minHeight="168px"
      diagramWidth="80%"
      diagramMarginBottom="1.2rem"
      paddingRight="2rem"
      brushImgWidth="95%"
      colGap="1.2rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="3rem"
      title={
        <>
          TECHNIQUE<sup>MD</sup> CLASSIC
        </>
      }
      description={[
        <>
          Le manche coussiné Quad-Grip<sup>MD</sup> facilite la technique de
          brossage recommandée à 45°
        </>,
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la gencive<sup>1,2</sup>
        </>,
      ]}
      imprintColors={[["#f1592a"], ["#8dc63e"], ["#00aeee"], ["#9f5fa7"]]}
      specs={[
        [
          { label: "Article", value: "491" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "30" },
        ],
        [
          { value: "495" },
          { value: "Ultrasouple" },
          { value: "Compacte" },
          { value: "30" },
        ],
      ]}
    />
  </>
);

export default Slide7;
