import Brush1_Monsterz from "../../../../../assets/toothbrush/Kids/Slide1/Brush-Monsterz.webp";
import Brush1_MonsterzKids from "../../../../../assets/toothbrush/Kids/Slide1/Brush-MonsterzKids.webp";
import Slide1Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide1/Slide1Col1-topImg.webp";
import Slide1Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide1/Slide1Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";

const Slide1 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_Monsterz}
      diagramImage={Slide1Col1TopImg}
      diagramWidth="80%"
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperMarginTop="-24px"
      textWrapperPaddingRight="3.8rem"
      minHeight="190px"
      colGap="0.8rem"
      useBulletPoints={true}
      showImprintText={false}
      description={[
        "Très petite tête conçue pour la bouche des bébés",
        `Soies à micro-extrémités souples et douces pour les gencives d'un bébé qui fait ses premières dents`,
        `Accès facilité dans les puits et fissures, là où les premières caries peuvent se former`,
        `Le long manche et la prise ferme aident le parent à manier la brosse à dents`,
      ]}
      imprintColors={[["#f37c8e"], ["#ffd703"], ["#42bfa4"], ["#1b97d4"]]}
      specs={[
        [
          { label: "Article", value: "213" },
          { label: "Texture", value: "Ultrasouple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "11" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_MonsterzKids}
      diagramImage={Slide1Col2TopImg}
      diagramWidth="80%"
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperMarginTop="-24px"
      useBulletPoints={true}
      minHeight="190px"
      description={[
        "Soies souples éliminant la plaque ecacement et en douceur",
        "Les soies du centre aident à mesurer la quantité de dentifrice adéquate",
        "Manche ergonomique avec appui pour le pouce facilitant la prise en main",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
      ]}
      imprintColors={[["#8d75b4"], ["#eb5d8d"], ["#8fca6b"], ["#36c1cd"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Article", value: "901" },
          { label: "Texture", value: "Ultrasouple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "19" },
        ],
      ]}
    />
  </>
);

export default Slide1;
