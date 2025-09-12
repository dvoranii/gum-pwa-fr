import Brush1_EnamelClean from "../../../../../assets/toothbrush/Adult/Slide2/Brush-Enamel.webp";
import Brush1_SensitiveCare from "../../../../../assets/toothbrush/Adult/Slide2/Brush-SensitiveCare.webp";
import Diagrams_EnamelClean from "../../../../../assets/toothbrush/Adult/Slide2/circle-diagrams-enamelClean.webp";
import Diagrams_SensitiveCare from "../../../../../assets/toothbrush/Adult/Slide2/circle-diagrams-sensitiveCare.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import {
  DescriptionBold,
  TitleLight,
} from "../../../components/ProductSlide/ProductSlide.styles";

const Slide2 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_EnamelClean}
      diagramImage={Diagrams_EnamelClean}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperPaddingRight="0.5rem"
      imgMinWidth="54px"
      title={
        <>
          <TitleLight>
            TECHNIQUE<sup>MD</sup>
          </TitleLight>{" "}
          ENAMEL CLEAN
        </>
      }
      description={[
        <>
          Les divisions microscopiques séparent chacune des soies en plusieurs
          micro-extrémités pour nettoyer une surface
          <br />
          <DescriptionBold>70 % plus grande</DescriptionBold> que des soies à
          pointe arrondie.<sup>3</sup>
        </>,
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la gencive.<sup>4, 5</sup>
        </>,
      ]}
      imprintColors={[["#cb0a3d"], ["#c369c2"], ["#38b5e6"], ["#34c0ae"]]}
      specs={[
        [
          { label: "Article", value: "4471" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "31" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_SensitiveCare}
      diagramImage={Diagrams_SensitiveCare}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperPaddingRight="0.8rem"
      imgMinWidth="54px"
      title={
        <>
          <TitleLight>
            TECHNIQUE<sup>MD</sup>
          </TitleLight>{" "}
          SENSITIVE CLEAN
        </>
      }
      description={[
        <>
          Le manche Quad-Grip<sup>MD</sup> unique et la structure Dome Trim
          <sup>MD</sup>, combinés aux soies ultra-souples orent une solution
          douce pour l’élimination de la plaque dentaire.
        </>,
      ]}
      imprintColors={[["#86ca94"], ["#2ac2f0"], ["#f8acbd"], ["#cda9ce"]]}
      specs={[
        [
          { label: "Article", value: "517" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "46" },
        ],
      ]}
    />
  </>
);

export default Slide2;
