import TechniqueKidsBrush from "../../../../../assets/toothbrush/Kids/Slide7/Brush-TechniqueKids.webp";
import BrightCareBrush from "../../../../../assets/toothbrush/Kids/Slide8/Brush-GUMBrightCare.webp";
import TechniqueKidsDiagram from "../../../../../assets/toothbrush/Kids/Slide7/circle-diagram-TechniqueKids.webp";
import BrightCareDiagram from "../../../../../assets/toothbrush/Kids/Slide8/circle-diagram-GUMBrightCare.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";
import { DescriptionBold } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide6 = () => (
  <>
    <ProductSlide
      brushImage={TechniqueKidsBrush}
      diagramImage={TechniqueKidsDiagram}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/fr/products/221-technique-r-kids",
        width: "30px",
        marginTop: "0",
      }}
      imprintAndBadgeWrapperPaddingTop="2rem"
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
          nettoyer sous la gencive<sup>1, 2</sup>
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
      brushImage={BrightCareBrush}
      diagramImage={BrightCareDiagram}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/fr/products/4594-gum%C2%AE-bright-care%E2%84%A2-toothbrush",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      imprintPaddingTop="3.4rem"
      brushSpecsWrapperWidth="100%"
      brushSpecsGridCols="1fr 1.2fr 1.8fr 1.3fr"
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
          G•U•M&nbsp;BRIGHT&nbsp;CARE<sup>MC</sup>
        </>
      }
      description={[
        <>
          Les soies spéciales BrightLine<sup>MC</sup> Grip aident à éliminer les
          taches pour des dents{" "}
          <DescriptionBold>28 % plus blanches</DescriptionBold>
          <sup>3</sup>
        </>,
        <>
          Les soies plus longues situées à l’extrémité de la brosse facilitent
          le nettoyage des surfaces à l’arrière de la bouche
        </>,
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la gencive<sup>1, 2</sup>
        </>,
      ]}
      imprintColors={[["#a1227f"], ["#395fab"], ["#e71d26"], ["#43ae48"]]}
      specs={[
        [
          { label: "Article", value: "4591" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "30" },
        ],
      ]}
    />
  </>
);

export default Slide6;
