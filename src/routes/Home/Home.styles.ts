import { styled } from "styled-components";
import HomeBG from "../../assets/Home-bg-fr.webp";
import { colors } from "../../constants/colors";

export const PageContainerOuter = styled.div`
  background: #ffffff;
  height: 100vh;
  width: 100%;
  background-image: url(${HomeBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  h1 {
    font-family: "Gotham", sans-serif;
    font-size: 64px;
    font-weight: 400;
    position: absolute;
    top: 23vw;
    left: 6vw;
    color: ${colors.primary};
    line-height: 0.92;
    letter-spacing: -2px;
  }
`;
