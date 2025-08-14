import ProxabrushSlide from "../ProxabrushSlide";
import ProxabrushImg1314 from "../../../../../../assets/btc/patient/recommendations/Proxabrush/1314/1314-proxabrush.webp";
import BottomImg from "../../../../../../assets/btc/patient/recommendations/Proxabrush/1314/bottom-img.webp";

export default function Proxabrush1314() {
  return (
    <ProxabrushSlide
      title={
        <>
          Proxabrush<sup>MD</sup>
        </>
      }
      subtitle="MICRO PETIT"
      sideImage={ProxabrushImg1314}
      bottomImage={BottomImg}
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
