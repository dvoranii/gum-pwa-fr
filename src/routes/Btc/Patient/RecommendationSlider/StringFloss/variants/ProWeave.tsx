import StringFlossSlide from "../StringFloss";
import ProductImage from "../../../../../../assets/btc/patient/recommendations/StringFloss/1815-Floss.webp";

export default function ProWeaveFloss() {
  return (
    <StringFlossSlide
      title="FIL DENTAIRE"
      subtitle={
        <>
          Pro-Weave<sup>MD</sup>
        </>
      }
      topImage={ProductImage}
      topImageWidth="90%"
      topImageMarginBottom="1.2rem"
      containerMarginTop="-28px"
      contentPadding="0 0 0 3rem"
      contentMarginTop="-12px"
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin="2px"
      bullets={[
        {
          text: "Conception tissée qui élimine le biofilm entre les dents et sous la ligne gingivale.",
        },
        {
          text: (
            <>
              Processus d’entrelacement qui produit un fil dentaire résistant et
              lisse conçu pour ne pas s’effilocher, se briser ou se déformer
              <sup>13</sup>.
            </>
          ),
        },
      ]}
    />
  );
}
