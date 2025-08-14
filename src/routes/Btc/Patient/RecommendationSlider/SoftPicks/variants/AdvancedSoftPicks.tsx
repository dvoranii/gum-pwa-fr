import SoftPicksSlide from "../SoftPicks";
import SideImage from "../../../../../../assets/btc/patient/recommendations/SoftPicks/650-SoftPick.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/SoftPicks/bottom-img-650.webp";

export default function AdvancedSoftPicks() {
  return (
    <SoftPicksSlide
      title={
        <>
          Soft-Picks<sup>MD</sup>
        </>
      }
      subtitle="ÉVOLUÉS"
      sideImage={SideImage}
      bottomImage={BottomImage}
      bottomImageWidth="60%"
      gap="2.4rem"
      bullets={[
        {
          lines: [
            "Manche incurvé plus long qui améliore la manipulation et offre un meilleur nettoyage dans les endroits difficiles d’accès.",
          ],
        },
        {
          lines: [
            <>
              Cliniquement prouvé pour éliminer 22% de plaque en plus que le
              brossage seul.
              <sup>23</sup>
            </>,
          ],
        },
      ]}
    />
  );
}
