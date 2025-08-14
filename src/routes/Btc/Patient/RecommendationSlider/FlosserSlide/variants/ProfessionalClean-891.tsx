import FlosserSlide from "../FlosserSlide";
import FlosserImage from "../../../../../../assets/btc/patient/recommendations/Flossers/891-FlosserImg.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp";

export default function ProfessionalCleanFlosser() {
  return (
    <FlosserSlide
      title={
        <>
          PORTE-FIL DENTAIRE Soins professionnels<sup>MD</sup>
        </>
      }
      titleSize="2.6rem"
      subtitle="À LA MENTHE"
      subtitleSize="2.4rem"
      subtitleMarginTop="0.4rem"
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bottomImageWidth="90%"
      bullets={[
        {
          text: (
            <>
              Le fil dentaire texturé efficace élimine 2x plus de plaque
              <sup>10</sup>.
            </>
          ),
        },
        {
          text: (
            <>
              Conçu pour résister à l'effilochage ou au bris<sup>12</sup>.
            </>
          ),
        },
        {
          text: (
            <>
              Prise souple et légère qui utilise 20% moins de plastique
              <sup>13</sup>.
            </>
          ),
        },
      ]}
    />
  );
}
