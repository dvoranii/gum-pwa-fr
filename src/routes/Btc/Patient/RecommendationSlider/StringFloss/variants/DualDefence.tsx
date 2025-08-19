import StringFlossSlide from "../StringFloss";
import ProductImage from "../../../../../../assets/btc/patient/recommendations/StringFloss/2008-Floss.webp";

export default function DualDefenceFloss() {
  return (
    <StringFlossSlide
      title="FIL DENTAIRE TORSADÉ"
      subtitle="Dual-Defense"
      topImage={ProductImage}
      topImageWidth="90%"
      topImageMarginBottom="1.4rem"
      contentPadding="0 0 0 4rem"
      contentMarginTop="-12px"
      containerMarginTop="-12px"
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin="8px"
      bullets={[
        { text: "Fil dentaire torsadé, saveur de menthe fraîche." },
        {
          text: (
            <>
              Élimine 2x plus de plaque.<sup>10</sup>
            </>
          ),
        },
        {
          text: (
            <>
              Couvre une surface 30% plus grande.<sup>11</sup>
            </>
          ),
        },
      ]}
    />
  );
}
