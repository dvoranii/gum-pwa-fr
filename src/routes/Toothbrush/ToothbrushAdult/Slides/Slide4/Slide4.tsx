import Brush1_ToothAndTongue from "../../../../../assets/toothbrush/Adult/Slide4/Brush-toothAndTongue.webp";
import Diagrams_ToothAndTongue from "../../../../../assets/toothbrush/Adult/Slide4/circle-diagram-tooth&tongue.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";

const Slide4 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_ToothAndTongue}
      diagramImage={Diagrams_ToothAndTongue}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      imgMinWidth="57px"
      title={<>DENTS et LANGUE</>}
      description={[
        <>
          Avec 40 % de poils en plus<sup>3</sup>, pour nettoyer ecacement et en douceur les
          espaces interdentaires sans irriter les gencives. Un nettoyeur de
          langue avec grattoirs striés pour améliorer le nettoyage et aider à
          réduire la mauvaise haleine.
        </>,
      ]}
      imprintColors={[
        ["#02adee", "#007bc5"],
        ["#f9ae68", "#f1592a"],
        ["#a8cf87", "#6c8d42"],
        ["#f295be", "#ec4699"],
      ]}
      specs={[
        [
          { label: "Article", value: "394" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Full" },
          { label: "Touffes", value: "46" },
        ],
      ]}
      isSingleColumn={true}
    />
  </>
);

export default Slide4;
