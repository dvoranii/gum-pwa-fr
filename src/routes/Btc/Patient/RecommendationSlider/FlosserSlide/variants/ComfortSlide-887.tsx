import FlosserSlide from "../FlosserSlide";
import FlosserImage from "../../../../../../assets/btc/patient/recommendations/Flossers/887-FlosserImg.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp";

export default function ComfortSlideFlosser() {
  return (
    <FlosserSlide
      title={
        <>
          PORTE-FIL DENTAIRE Comfort Slide<sup>MD</sup>
        </>
      }
      titleSize="3rem"
      subtitle="À LA MENTHE"
      subtitleSize="2.5rem"
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bullets={[
        {
          text: "Fil dentaire soyeux et non collant qui glisse sans effort.",
        },
        {
          text: (
            <>
              Prise souple et légère qui utilise 20% moins de plastique
              <sup>13</sup>
            </>
          ),
        },
      ]}
    />
  );
}
