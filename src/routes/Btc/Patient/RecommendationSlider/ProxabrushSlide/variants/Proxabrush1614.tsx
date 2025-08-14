import ProxabrushSlide from "../ProxabrushSlide";
import Proxabrush1614Img from "../../../../../../assets/btc/patient/recommendations/Proxabrush/1614/1614-proxabrush.webp";
import BottomImg1614 from "../../../../../../assets/btc/patient/recommendations/Proxabrush/1614/bottom-img-1614.webp";

export default function Proxabrush1614() {
  return (
    <ProxabrushSlide
      title={
        <>
          Proxabrush<sup>MD</sup>
        </>
      }
      subtitle="WIDE"
      sideImage={Proxabrush1614Img}
      bottomImage={BottomImg1614}
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
