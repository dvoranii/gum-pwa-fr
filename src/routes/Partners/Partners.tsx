import * as S from "./Partners.styles";

import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";
import BulletList from "../../components/BulletList/BulletList";
import GumLogo from "../../assets/gum-logo.svg";
import PatientImg from "../../assets/partners/Patient.webp";
import ProfessionalImg from "../../assets/partners/Professional.webp";
import PatAndProf from "../../assets/partners/Pat&Prof.webp";
import Partners2 from "../../assets/partners/Partner2.webp";

import BottomText from "../../components/BottomText/BottomText";

const partnersNavItems = [
  {
    path: "/partners",
    label: "Vos\u00A0partenaires\u00A0en\u00A0soins",
    end: true,
  },
  { path: "/recommend", label: "Recommander" },
];

export default function Partners() {
  const location = useLocation();
  const isHomePage = location.pathname === "/partners";

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    contain: true,
    cellAlign: "center",
    on: {
      ready: function (this: Flickity) {
        setTimeout(() => {
          this.resize();
        }, 100);
      },
    },
  };

  return (
    <ModuleContainer $isHomePage={isHomePage}>
      <InnerNav navItems={partnersNavItems} />

      <S.Content>
        {isHomePage ? (
          <>
            <ModuleTitle
              title={"Partenaires en soins oraux"}
              $marginBottom="0.4rem"
            />
            <BulletList
              items={[
                <>
                  <span>
                    GUM<sup>MD</sup> conçoit des produits supérieurs pour
                    répondre aux besoins uniques des patients.
                  </span>
                </>,
                "Nous soutenons vos objectifs de professionnel dentaire.",
              ]}
            />

            <S.CarouselWrapper>
              <Flickity
                className={"carousel"}
                elementType={"div"}
                options={flickityOptions}
                disableImagesLoaded={true}
                static={false}
              >
                <S.PartnersBG>
                  <S.GumLogoCol>
                    <S.GumLogo src={GumLogo} />

                    <S.GumTextWrapper>
                      <h2>Transformation</h2>
                      <h3>
                        des expériences et des
                        <br /> relations des patients
                      </h3>
                    </S.GumTextWrapper>
                  </S.GumLogoCol>

                  <S.GraphicsCol>
                    <S.ImgTextWrapper $marginTop="-20px">
                      <img src={PatientImg} alt="" />
                      <S.ColTextWrapper>
                        <h4>Patient</h4>
                        <p>
                          Création d’expériences qui peuvent transformer la
                          relation des patients avec l’hygiène.
                        </p>
                      </S.ColTextWrapper>
                    </S.ImgTextWrapper>
                    <S.ImgTextWrapper $marginTop="-20px">
                      <img src={ProfessionalImg} alt="" />
                      <S.ColTextWrapper>
                        <h4>Professionnel</h4>
                        <p>
                          Conception de produits supérieurs qui comblent les
                          besoins uniques des patients.
                        </p>
                      </S.ColTextWrapper>
                    </S.ImgTextWrapper>
                    <S.ImgTextWrapper>
                      <img src={PatAndProf} alt="" />
                      <S.ColTextWrapper>
                        <h4>Patient et professionnel</h4>
                        <p>
                          Instauration de la confiance par des recommandations
                          sur lesquelles le professionnel et le patient peuvent
                          compter.
                        </p>
                      </S.ColTextWrapper>
                    </S.ImgTextWrapper>
                  </S.GraphicsCol>
                </S.PartnersBG>
                <S.PartnersBG $isFullWidthImage>
                  <S.FullWidthImage
                    src={Partners2}
                    alt="Partners alternative view"
                  />
                </S.PartnersBG>
              </Flickity>
            </S.CarouselWrapper>

            <BottomText
              lines={[
                <>
                  Mériter chaque jour notre statut de la marque la plus
                  recommandée<sup>7</sup>;
                </>,
                "voilà notre raison d’être.",
              ]}
            />
          </>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
