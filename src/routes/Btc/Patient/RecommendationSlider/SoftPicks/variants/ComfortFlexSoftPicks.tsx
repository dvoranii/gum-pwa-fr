import SoftPicksSlide from "../SoftPicks";
import SideImage from "../../../../../../assets/btc/patient/recommendations/SoftPicks/670-SoftPick.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/SoftPicks/bottom-img-650.webp";

export default function ComfortFlexSoftPicks() {
  return (
    <SoftPicksSlide
      title={
        <>
          Soft-Picks<sup>MD</sup>
        </>
      }
      subtitle="CONFORT FLEX MENTHE"
      subtitleSize="1.8rem"
      sideImage={SideImage}
      sideImageHeight="85%"
      bottomImage={BottomImage}
      bottomImageMargin="1.4rem"
      bullets={[
        {
          text: `Nettoyage interdentaire pratique et confortable.`,
        },
        {
          text: `Soies effilées douces et souples conçues pour mieux s’insérer dans les espaces interdentaires.`,
        },
        {
          text: (
            <>
              Cliniquement prouvé pour éliminer 22% de plaque en plus que le
              brossage seul.<sup>23</sup>
            </>
          ),
        },
      ]}
    />
  );
}
