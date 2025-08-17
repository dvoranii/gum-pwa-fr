import Brush1_CrayolaPipSqueaks from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Pipsqueaks.webp";
import Brush1_CrayolaMarker from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Markers.webp";
import Slide3Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col1-topImg.webp";
import Slide3Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide3 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CrayolaPipSqueaks}
      diagramImage={Slide3Col1TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="86%"
      minHeight="246px"
      colGap="0.8rem"
      textWrapperPaddingRight="2rem"
      diagramMarginBottom="0"
      useBulletPoints={true}
      showImprintText={false}
      title={
        <>
          <TitleLight>Brosse à dents</TitleLight>
          <br />
          Crayola<sup>MC</sup> PIP-SQUEAKS<sup>MC</sup>
        </>
      }
      description={[
        "Les soies souples de cette brosse sont douces pour les dents et les gencives des enfants",
        "La tête étroite et elée de la brosse est conçue pour faciliter le maniement dans les petites bouches",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
      ]}
      imprintColors={[["#fcb041"], ["#c91690"], ["#00aeee"], ["#22b785"]]}
      specs={[
        [
          { label: "Article", value: "232" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "19" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_CrayolaMarker}
      diagramImage={Slide3Col2TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="86%"
      brushImgWidth="90%"
      colGap="0.8rem"
      minHeight="246px"
      diagramMarginBottom="0"
      useBulletPoints={true}
      textWrapperPaddingRight="3.4rem"
      title={
        <>
          <TitleLight>Brosse à dents</TitleLight>
          <br />
          Crayola<sup>MC</sup> MARQUEUR
        </>
      }
      description={[
        "Les soies plus longues situées à l’extrémité facilitent le nettoyage des dents diciles à atteindre à l’arrière de la bouche",
        "La forme ergonomique du manche étroit facilite son maniement par de petites mains",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
      ]}
      imprintColors={[
        ["#00ace6"],
        ["#8261aa"],
        ["#ed1b3b"],
        ["#f88f1f"],
        ["#f6ee31"],
        ["#aad04d"],
      ]}
      showImprintText={false}
      specs={[
        [
          { label: "Article", value: "227" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "25" },
        ],
      ]}
    />
  </>
);

export default Slide3;
