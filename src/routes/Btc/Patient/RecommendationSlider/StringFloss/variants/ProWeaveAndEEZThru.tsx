import StringFlossSlide from "../StringFloss";
import ProductImage from "../../../../../../assets/btc/patient/recommendations/StringFloss/1815+840-Floss.webp";

export default function ProWeaveAndEEZThru() {
  return (
    <StringFlossSlide
      title="FIL DENTAIRE"
      subtitle={
        <>
          Pro-Weave<sup>MD</sup>
        </>
      }
      secondTitle="PASSE-FIL DENTAIRE"
      secondSubtitle={
        <>
          EEZ-THRU<sup>MD</sup>
        </>
      }
      topImage={ProductImage}
      topImageMarginBottom="1.2rem"
      isCombination={true}
      combinationTitleSize="2.4rem"
      combinationSubtitleSize="2rem"
      bulletMargin="40px;"
      bullets={[
        {
          text: `Conception tissée qui élimine le biofilm entre
les dents et sous la ligne gingivale.`,
        },
        {
          text: `Boucle de nylon polyvalente qui aide à insérer le fil dentaire
dans les espaces interdentaires non accessibles à la plupart
des autres produits.`,
        },
      ]}
    />
  );
}
