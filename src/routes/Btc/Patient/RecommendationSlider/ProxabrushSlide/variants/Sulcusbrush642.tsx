// SulcusBrush.tsx
import ProxabrushSlide from "../ProxabrushSlide";
import SideImage from "../../../../../../assets/btc/patient/recommendations/Proxabrush/642/642-sulcus.webp";
import BottomImage from "../../../../../../assets/btc/patient/recommendations/Proxabrush/642/bottom-img-642.webp";
import { colors } from "../../../../../../constants/colors";
import styled from "styled-components";

const GreenMarker = styled.span`
  color: ${colors.primary} !important;
  font-weight: 500;
  display: inline !important;
`;

export default function SulcusBrush() {
  return (
    <ProxabrushSlide
      title="BROSSE"
      subtitle="à sulcus"
      subtitleSize="clamp(18px, 3.4vw, 3.2rem)"
      sideImage={SideImage}
      sideImageHeight="90%"
      bottomImage={BottomImage}
      bottomImageMarginLeft="-28px"
      bulletMarginBottom="1.2rem"
      bullets={[
        { text: "Manche à deux têtes." },
        {
          text: "La brosse à une seule touffe déloge la plaque le long de la ligne gingivale.",
        },
        { text: "Soies antibactériennes souples." },
        {
          text: "Convient aux couronnes, aux ponts aux appareils d’orthodontie, aux fils linguaux et aux implants.",
        },
        {
          text: (
            <span>
              Deux angles pour accéder à la ligne gingivale linguale{" "}
              <GreenMarker>(A)</GreenMarker> et à la ligne gingivale buccale{" "}
              <GreenMarker>(B)</GreenMarker> gumlines.
            </span>
          ),
        },
      ]}
    />
  );
}
