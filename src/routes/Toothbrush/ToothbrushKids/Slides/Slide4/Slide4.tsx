import Brush1_CrayolaTimerLight from "../../../../../assets/toothbrush/Kids/Slide4/Brush-Crayola-TimerLight.webp";
import Brush1_CrayolaDeepClean from "../../../../../assets/toothbrush/Kids/Slide4/Brush-Crayola-DeepClean.webp";
import Slide4Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide4/Slide4Col1-topImg.webp";
import Slide4Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide4/Slide4Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide4 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CrayolaTimerLight}
      diagramImage={Slide4Col1TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      diagramMarginBottom="0.2rem"
      diagramWidth="85%"
      brushImgWidth="90%"
      textWrapperPaddingRight="1.8rem"
      colGap="1rem"
      minHeight="230px"
      useBulletPoints={true}
      showImprintText={false}
      title={
        <>
          <TitleLight>Brosse à dents à</TitleLight> MINUTERIE
          <br />
          CLIGNOTANTE Crayola<sup>MC</sup>
        </>
      }
      description={[
        "La brosse à dents clignote pendant une minute pour aider les enfants à savoir quand il est temps de changer d'arche de dents et les encourager à se brosser les dents plus longtemps",
        <>
          Les soies Dome Trim<sup>MC</sup> sont cliniquement conçues pour
          nettoyer sous la gencive
          <sup>1,2</sup>
        </>,
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
        "Pile à DEL non remplaçable",
      ]}
      imprintColors={[["#8dc63e"], ["#f14f68"], ["#00aeee"], ["#fcb041"]]}
      specs={[
        [
          { label: "Article", value: "202" },
          { label: "Texture", value: "Souple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "29" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_CrayolaDeepClean}
      diagramImage={Slide4Col2TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="85%"
      brushImgWidth="88%"
      diagramMarginBottom="0.2rem"
      colGap="1rem"
      minHeight="230px"
      textWrapperPaddingRight="2.8rem"
      useBulletPoints={true}
      title={
        <>
          <TitleLight>Brosse à dents</TitleLight>
          <br />
          Crayola<sup>MC</sup> DEEP CLEAN
        </>
      }
      description={[
        <>
          Les soies Deep Clean ultrasouples se glissent entre les dents et le
          long de la gencive pour un meilleur nettoyage<sup>3</sup>
        </>,
        "L'appuie-pouce et le manche triangulaire permettent une meilleure prise et facilitent le brossage à 45 degrés",
        "Ventouse pour que la brosse à dents tienne à la verticale, ce qui aide à garder les soies propres",
      ]}
      imprintColors={[["#0075ba"], ["#f15921"], ["#80c241"], ["#9163aa"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Article", value: "234" },
          { label: "Texture", value: "Ultrasouple" },
          { label: "Taille", value: "Compacte" },
          { label: "Touffes", value: "25" },
        ],
      ]}
    />
  </>
);

export default Slide4;
