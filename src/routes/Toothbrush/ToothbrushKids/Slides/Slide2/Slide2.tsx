import Brush1_TimerLight from "../../../../../assets/toothbrush/Kids/Slide2/Brush-Monsterz-TimerLight.webp";
import Brush1_MonsterzJunior from "../../../../../assets/toothbrush/Kids/Slide2/Brush-Monsterz-Junior.webp";
import Slide1Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide2/Slide2Col1-topImg.webp";
import Slide1Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide2/Slide2Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";

const Slide2 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_TimerLight}
      diagramImage={Slide1Col1TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      textWrapperMarginTop="-24px"
      textWrapperPaddingRight="2.2rem"
      minHeight="190px"
      brushImgWidth="90%"
      listPaddingLeft="1.8rem"
      useBulletPoints={true}
      showImprintText={false}
      colGap="0.8rem"
      diagramWidth="93%"
      description={[
        "La brosse à dents clignote pendant une minute pour aider les enfants à savoir quand il est temps de changer d'arche de dents et les encourager à se brosser les dents plus longtemps",
        <>
          Les soies Dome Trim<sup>MD</sup> sont cliniquement conçues pour
          nettoyer sous la gencive<sup>1, 2</sup>
        </>,
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
        "Pile à DEL non remplaçable",
      ]}
      imprintColors={[["#bdd62e"], ["#f0548f"], ["#c7a1cb"], ["#24a1db"]]}
      specs={[
        [
          { label: "Article", value: "903" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "24" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_MonsterzJunior}
      diagramImage={Slide1Col2TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
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
  </>
);

export default Slide2;
