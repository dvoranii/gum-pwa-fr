import ProxabrushSlide from "../ProxabrushSlide";
import Proxabrush611Img from "../../../../../../assets/btc/patient/recommendations/Proxabrush/611/611-proxabrush.webp";
import BottomImg611 from "../../../../../../assets/btc/patient/recommendations/Proxabrush/611/bottom-img-611.webp";

export default function Proxabrush611() {
  return (
    <ProxabrushSlide
      title={
        <>
          Proxabrush<sup>MD</sup>
        </>
      }
      subtitle="ORIGINAL MANCHE ET RECHARGES"
      subtitleSize="clamp(14px, 3.5vw, 1.4rem)"
      sideImage={Proxabrush611Img}
      sideImageHeight="90%"
      bottomImage={BottomImg611}
      bullets={[
        {
          text: (
            <>
              Aide supplémentaire pour nettoyer les surfaces interdentaires
              postérieures.
            </>
          ),
        },
        { text: "Manche qui permet des embouts de différentes tailles" },
        { text: "Manche ergonomique." },
        {
          text: (
            <>
              Les soies de forme triangulaire éliminent 25% plus de plaque
              dentaire que les soies rondes conventionnelles<sup>8</sup>.
            </>
          ),
        },
      ]}
    />
  );
}
