import Brush1_CompleteCare from "../../../../../assets/toothbrush/Adult/Slide3/Brush-CompleteCare.webp";
import Brush1_DomeTrim from "../../../../../assets/toothbrush/Adult/Slide3/Brush-DomeTrim.webp";
import Diagrams_CompleteCare from "../../../../../assets/toothbrush/Adult/Slide3/circle-diagram-completeCare.webp";
import Diagrams_DomeTrim from "../../../../../assets/toothbrush/Adult/Slide3/circle-diagram-domeTrim.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide3 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CompleteCare}
      diagramImage={Diagrams_CompleteCare}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperPaddingRight="1rem"
      imgMinWidth="54px"
      title={
        <>
          <TitleLight>
            TECHNIQUE<sup>MD</sup>
          </TitleLight>{" "}
          COMPLETE CARE
        </>
      }
      description={[
        `Les soies plus longues situées à l’extrémité
          de la brosse facilitent l’accès aux surfaces
          diciles à atteindre à l’arrière de la bouche.`,
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la ligne gingivale.<sup>1, 3</sup>
        </>,
      ]}
      imprintColors={[["#fec60a"], ["#f1592a"], ["#8dc63e"], ["#00a2e4"]]}
      specs={[
        [
          { label: "Article", value: "591" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "30" },
        ],
        [
          { value: "559" },
          { value: "Ultra Soft" },
          { value: "Compact" },
          { value: "30" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_DomeTrim}
      diagramImage={Diagrams_DomeTrim}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      imgMinWidth="54px"
      title={
        <>
          <TitleLight>DOME</TitleLight> TRIM<sup>MD</sup>
        </>
      }
      description={[
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la ligne gingivale.
          <sup>1, 2</sup>
        </>,
      ]}
      imprintColors={[["#ae2181"], ["#2f3192"], ["#f79633"], ["#f15157"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Article", value: "457" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "30" },
        ],
        [
          { value: "459" },
          { value: "Ultrasouple" },
          { value: "Compacte" },
          { value: "30" },
        ],
      ]}
    />
  </>
);

export default Slide3;
