import FlosserSlide from "../FlosserSlide";
import FlosserImage from "../../../../../../assets/btc/patient/recommendations/Flossers/831-FlosserImg.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp";

export default function EcoCleanFlosser() {
  return (
    <FlosserSlide
      title={
        <>
          PORTE-FIL DENTAIRE Eco Clean<sup>MD</sup>
        </>
      }
      subtitle="Soins écologiques À LA MENTHE"
      subtitleSize="2rem"
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bottomImageWidth="95%"
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
              Conçu pour résister à l’effilochage ou au bris<sup>12</sup>.
            </>
          ),
        },
      ]}
    />
  );
}
