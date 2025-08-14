import ProxabrushSlide from "../ProxabrushSlide";
import Proxabrush1414Img from "../../../../../../assets/btc/patient/recommendations/Proxabrush/1414/1414-proxabrush.webp";
import BottomImg1414 from "../../../../../../assets/btc/patient/recommendations/Proxabrush/1414/bottom-img-1414.webp";

export default function Proxabrush1414() {
  return (
    <ProxabrushSlide
      title={
        <>
          Proxabrush<sup>MD</sup>
        </>
      }
      subtitle="PETIT"
      sideImage={Proxabrush1414Img}
      bottomImage={BottomImg1414}
      bullets={[
        {
          text: (
            <>
              Les soies de forme triangulaire éliminent 25% plus de plaque
              dentaire que les soies rondes conventionnelles<sup>8</sup>.
            </>
          ),
        },
        { text: "Col pliable." },
        { text: "Manche caoutchouté souple." },
        {
          text: (
            <>
              Soies antibactériennes<sup>9</sup>.
            </>
          ),
        },
      ]}
    />
  );
}
