import StringFlossSlide from "../StringFloss";
import ProductImage from "../../../../../../assets/btc/patient/recommendations/StringFloss/2030-Floss.webp";

export default function DeepCleanFloss() {
  return (
    <StringFlossSlide
      title="FIL DENTAIRE"
      titleSize="clamp(24px, 6vw, 2.8rem)"
      subtitle="Deep Clean Expanding"
      topImage={ProductImage}
      topImageWidth="90%"
      containerMarginTop="-12px"
      topImageMarginBottom="1.2rem"
      contentPadding="0 0 0 3rem"
      contentMarginTop="-12px"
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin="8px"
      bullets={[
        {
          text: "Mince et facile à insérer entre les zones de contact étroites.",
        },
        {
          text: (
            <>
              Fil dentaire qui se dilate pour éliminer 2x plus de plaque.
              <sup>10</sup>
            </>
          ),
        },
        { text: "Plusieurs filaments et fibres texturées." },
      ]}
    />
  );
}
