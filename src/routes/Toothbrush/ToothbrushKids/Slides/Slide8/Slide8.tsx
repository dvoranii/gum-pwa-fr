import SuperTipBrush from "../../../../../assets/toothbrush/Kids/Slide8/Brush-SuperTip.webp";
import BrightCareBrush from "../../../../../assets/toothbrush/Kids/Slide8/Brush-GUMBrightCare.webp";
import SuperTipDiagram from "../../../../../assets/toothbrush/Kids/Slide8/circle-diagram-SuperTip.webp";
import BrightCareDiagram from "../../../../../assets/toothbrush/Kids/Slide8/circle-diagram-GUMBrightCare.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { DescriptionBold } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide8 = () => (
  <>
    <ProductSlide
      brushImage={SuperTipBrush}
      diagramImage={SuperTipDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={true}
      brushSpecsWrapperWidth="100%"
      brushSpecsGridCols="1fr 1.2fr 1.8fr 1.3fr"
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
          SUPER TIP<sup>MD</sup>
        </>
      }
      description={[
        <>
          Les soies plus longues situées à l’extrémité de la brosse facilitent
          le nettoyage des surfaces à l’arrière de la bouche
        </>,
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la gencive<sup>1,2</sup>
        </>,
      ]}
      imprintColors={[["#784097"], ["#f26a2b"], ["#008ed0"], ["#00af86"]]}
      specs={[
        [
          { label: "Article", value: "468" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Sous-compacte" },
          { label: "Touffes", value: "24" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={BrightCareBrush}
      diagramImage={BrightCareDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
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
          nettoyer sous la gencive<sup>1,2</sup>
        </>,
      ]}
      imprintColors={[["#a1227f"], ["#395fab"], ["#e71d26"], ["#43ae48"]]}
      specs={[
        [
          { label: "Article", value: "4594" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Sous-compacte" },
          { label: "Touffes", value: "23" },
        ],
      ]}
    />
  </>
);

export default Slide8;
