import Brush1_CrayolaPipSqueaks from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Pipsqueaks.webp";
import Brush1_MonsterzJunior from "../../../../../assets/toothbrush/Kids/Slide2/Brush-Monsterz-Junior.webp";
import Slide2Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col1-topImg.webp";
import Slide1Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide2/Slide2Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide2 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_MonsterzJunior}
      diagramImage={Slide1Col2TopImg}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/fr/products/902-monsterz-junior-ages-5",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperMarginTop="-24px"
      textWrapperPaddingRight="2.9rem"
      minHeight="190px"
      brushImgWidth="90%"
      colGap="0.8rem"
      diagramWidth="93%"
      useBulletPoints={true}
      listPaddingLeft="1.8rem"
      description={[
        "Les soies du centre aident à mesurer la quantité de dentifrice adéquate",
        "Manche ergonomique avec appui pour le pouce facilitant la prise en main",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
      ]}
      imprintColors={[["#3b7dc2"], ["#84d2da"], ["#ef55a0"], ["#f6ee08"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Article", value: "902" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "29" },
        ],
      ]}
    />

    <ProductSlide
      brushImage={Brush1_CrayolaPipSqueaks}
      diagramImage={Slide2Col2TopImg}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/fr/products/crayola-pip-squeaks",
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
        "La tête étroite et effilée de la brosse est conçue pour faciliter le maniement dans les petites bouches",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
      ]}
      imprintColors={[["#fcb041"], ["#c91690"], ["#00aeee"], ["#22b785"]]}
      specs={[
        [
          { label: "Article", value: "232" },
          { label: "Texture", value: "Ultrasouple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "19" },
        ],
      ]}
    />
  </>
);

export default Slide2;
