import Brush1_DeepClean from "../../../../../assets/toothbrush/Adult/Slide1/Brush-DeepClean.webp";
import Brush1_SensitiveClean from "../../../../../assets/toothbrush/Adult/Slide1/Brush-SensitiveClean.webp";
import Diagrams_DeepClean from "../../../../../assets/toothbrush/Adult/Slide1/circle-diagrams-deepclean.webp";
import Diagrams_SensitiveClean from "../../../../../assets/toothbrush/Adult/Slide1/circle-diagrams-sensitiveclean.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import {
  DescriptionBold,
  TitleLight,
} from "../../../components/ProductSlide/ProductSlide.styles";

const Slide1 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_DeepClean}
      diagramImage={Diagrams_DeepClean}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      imgMinWidth="54px"
      title={
        <>
          <TitleLight>
            TECNHIQUE<sup>MD</sup>
          </TitleLight>{" "}
          DEEP CLEAN
        </>
      }
      description={[
        <>
          Les soies extrêmement elées nettoient jusqu'à 2,7 mm dans le sillon et
          jusqu'à 1,4 cm le long des gencives et entre les dents.<sup>1</sup>
        </>,
        <>
          <DescriptionBold>
            Élimination de la plaque 10X plus efficace
          </DescriptionBold>{" "}
          sous la ligne gingivale pour des gencives plus saines.<sup>2</sup>
        </>,
      ]}
      showAntibacterialBadge={true}
      imprintColors={[["#00773d"], ["#005eab"], ["#d8006d"], ["#f68933"]]}
      specs={[
        [
          { label: "Article", value: "525" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "30" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_SensitiveClean}
      diagramImage={Diagrams_SensitiveClean}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      imgMinWidth="54px"
      title={
        <>
          <TitleLight>
            TECNHIQUE<sup>MD</sup>
          </TitleLight>{" "}
          SENSITIVE CLEAN
        </>
      }
      description={[
        <>
          Pour un nettoyage <DescriptionBold>6X plus propre</DescriptionBold>
          <sup>6</sup> avec soies ultrasouples spécialement conçues pour la
          sensibilité.
        </>,
        `Les soies ultra-elées de la brosse à dents sont
        très fines et donc très douces pour les dents et
        les gencives sensibles, tout en nettoyant
        ecacement sous les gencives.`,
      ]}
      showAntibacterialBadge={true}
      imprintColors={[["#d692a9"], ["#54b6b3"], ["#5a9ac4"], ["#b3b3e0"]]}
      specs={[
        [
          { label: "Article", value: "528" },
          { label: "Texture", value: "Ultrasouple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "30" },
        ],
      ]}
    />
  </>
);

export default Slide1;
