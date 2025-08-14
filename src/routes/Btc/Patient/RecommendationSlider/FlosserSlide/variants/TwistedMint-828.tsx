import FlosserSlide from "../FlosserSlide";
import FlosserImage from "../../../../../../assets/btc/patient/recommendations/Flossers/828-FlosserImg.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp";

export default function TwistedMintFlosser() {
  return (
    <FlosserSlide
      title={
        <>
          PORTE-FIL DENTAIRE Twisted Mint<sup>MD</sup>
        </>
      }
      subtitle="Menthe torsadée"
      subtitleSize="2rem"
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bullets={[
        {
          text: (
            <>
              Élimine 2x plus de plaque<sup>10</sup>.
            </>
          ),
        },
        {
          text: (
            <>
              Couvre une surface 30% plus grande<sup>11</sup>.
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
