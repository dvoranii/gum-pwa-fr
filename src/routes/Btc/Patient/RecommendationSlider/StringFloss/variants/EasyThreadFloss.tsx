import StringFlossSlide from "../StringFloss";
import ProductImage from "../../../../../../assets/btc/patient/recommendations/StringFloss/3210-Floss.webp";

export default function EasyThreadFloss() {
  return (
    <StringFlossSlide
      title="FIL DENTAIRE"
      subtitle={
        <>
          EasyThread<sup>MD</sup>
        </>
      }
      topImage={ProductImage}
      topImageMarginBottom="0"
      contentPadding="0 0 0 4.2rem"
      bulletItemsFontSize="clamp(16px, 1.9vw, 1.8rem)"
      contentMarginTop="-20px"
      bullets={[
        {
          text: `Sections dotées d’enfileur de fil dentaire rigide intégré qui facilitent l’accès aux espaces difficiles à nettoyer sans irriter les gencives.`,
        },
        {
          text: `Sections dotées d’enfileur à deux extrémités pour maximiser le nettoyage avec chaque passage de fil.`,
        },
      ]}
    />
  );
}
