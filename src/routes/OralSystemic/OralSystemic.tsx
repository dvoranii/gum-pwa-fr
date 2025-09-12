import * as S from "./OralSystemic.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

import ModuleTitle from "../../components/ModuleTitle/ModuleTitle";

import OralSystemicImgFull from "../../assets/oral-systemic/OS-base-diagram.svg";
import BaseImg2 from "../../assets/oral-systemic/BaseImg-2.svg";
import Branches from "../../assets/oral-systemic/branches.svg";

import HeartBranch from "../../assets/oral-systemic/heartbranch.svg";
import HeartActive from "../../assets/oral-systemic/heart-active.svg";

import BrainBranch from "../../assets/oral-systemic/brainbranch.svg";
import BrainActive from "../../assets/oral-systemic/brain-active.svg";

import BloodBranch from "../../assets/oral-systemic/bloodbranch.svg";
import BloodActive from "../../assets/oral-systemic/blood-active.svg";

import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";
import BulletList from "../../components/BulletList/BulletList";

import BottomText from "../../components/BottomText/BottomText";

const oralSystemicNavItems = [
  {
    path: "/oral-systemic",
    label:
      "Le\u00A0lien\u00A0entre\u00A0la\u00A0santé\u00A0buccodentaire\u00A0et\u00A0la\u00A0santé\u00A0générale",
    end: true,
  },
  { path: "/recommend", label: "Recommander" },
];

export default function OralSystemicLink() {
  const location = useLocation();
  const isHomePage = location.pathname === "/oral-systemic";

  const [showBaseImg2, setShowBaseImg2] = useState(false);
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  const showCarousel = !showBaseImg2;
  const activeHeart = activeBranch === "heart";
  const activeBrain = activeBranch === "brain";
  const activeBlood = activeBranch === "blood";

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

  const toggleBaseImg = (e: React.PointerEvent) => {
    e.stopPropagation();
    setShowBaseImg2((prev) => !prev);
    setActiveBranch(null);
  };

  const toggleHeart = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch((prev) => (prev === "heart" ? null : "heart"));
    setShowBaseImg2(true);
  };

  const toggleBrain = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch((prev) => (prev === "brain" ? null : "brain"));
    setShowBaseImg2(true);
  };

  const toggleBlood = (e: React.PointerEvent) => {
    e.stopPropagation();
    setActiveBranch((prev) => (prev === "blood" ? null : "blood"));
    setShowBaseImg2(true);
  };

  const ResultWrapper = ({ children }: { children: ReactNode }) => (
    <S.ResultImgWrapper>
      <S.ResultContent>
        <S.ResultDescriptionOuter>{children}</S.ResultDescriptionOuter>
      </S.ResultContent>
    </S.ResultImgWrapper>
  );

  return (
    <ModuleContainer $isHomePage={isHomePage}>
      <InnerNav navItems={oralSystemicNavItems} />
      <S.Content>
        {isHomePage ? (
          <>
            <ModuleTitle
              title={
                "Le lien entre la santé buccodentaire et la santé générale"
              }
            />
            <BulletList items={["La santé générale commence par la bouche."]} />

            <S.OralSystemicImgWrapperOuter>
              <S.ImagesWrapperInner
                showResults={
                  !showCarousel && (activeHeart || activeBrain || activeBlood)
                }
              >
                <S.BaseImg
                  src={showBaseImg2 ? BaseImg2 : OralSystemicImgFull}
                  onPointerDown={toggleBaseImg}
                />

                {showBaseImg2 && (
                  <>
                    <S.Branches src={Branches} />

                    <S.HeartBranch
                      src={HeartBranch}
                      onPointerDown={toggleHeart}
                    />
                    {activeHeart && (
                      <S.HeartActiveOverlay
                        src={HeartActive}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    )}

                    <S.BrainBranch
                      src={BrainBranch}
                      onPointerDown={toggleBrain}
                    />
                    {activeBrain && (
                      <S.BrainActiveOverlay
                        src={BrainActive}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    )}

                    <S.BloodBranch
                      src={BloodBranch}
                      onPointerDown={toggleBlood}
                    />
                    {activeBlood && (
                      <S.BloodActiveOverlay
                        src={BloodActive}
                        onPointerDown={(e) => e.stopPropagation()}
                      />
                    )}
                  </>
                )}
              </S.ImagesWrapperInner>

              {showCarousel ? (
                <S.CarouselWrapper>
                  <Flickity
                    className={"carousel"}
                    elementType={"div"}
                    options={flickityOptions}
                    disableImagesLoaded={true}
                    static={false}
                  >
                    {/* Slide 1 */}
                    <S.CarouselSlide>
                      <S.SlideContent>
                        <S.SlideNumber>
                          6<S.SlideOrdinal>e</S.SlideOrdinal>
                        </S.SlideNumber>
                        <S.SlideTextContent>
                          <S.SlideTitle
                            $fontSize="clamp(2.4rem, 3.8vw, 2.8rem)"
                            $paddingRight="0.7rem"
                          >
                            La parodontite est la sixième plus courante action
                            médicale mondiale.
                          </S.SlideTitle>
                          <S.SlideCitation $paddingLeft="1.2rem">
                            *Journal of Clinical Periodontology<sup>1</sup>
                          </S.SlideCitation>
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>

                    {/* Slide 2 */}

                    <S.CarouselSlide>
                      <S.SlideContent>
                        <S.SlideNumber $letterSpacing="-12px">
                          57
                          <S.SlideOrdinal
                            $marginLeft="-0.8rem"
                            $fontSize="8.8rem"
                            $vertAlignBottom
                            $topOffset="6px"
                          >
                            +
                          </S.SlideOrdinal>
                        </S.SlideNumber>
                        <S.SlideTextContent>
                          <S.SlideTitle
                            $fontSize="clamp(2.2rem, 3.4vw, 2.6rem)"
                            $paddingLeft="0.8rem"
                          >
                            Les recherches indiquent que pas moins de 57
                            affections sont liées à la maladie parodontale.
                          </S.SlideTitle>
                          <S.SlideCitation
                            $paddingTop="1.2rem"
                            $paddingLeft="0.8rem"
                          >
                            *Journal of Clinical Periodontology<sup>2</sup>
                          </S.SlideCitation>
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>

                    {/* Slide 3 */}

                    <S.CarouselSlide>
                      <S.SlideContent>
                        <S.SlideNumber $letterSpacing="-8px">
                          <S.SlideNumberWrapper>
                            <S.SlideNumberText>
                              Plus de 50 ans
                            </S.SlideNumberText>
                          </S.SlideNumberWrapper>
                        </S.SlideNumber>
                        <S.SlideTextContent $paddingTop="1.2rem">
                          <S.SlideTitle
                            $fontSize="clamp(28px, 3.1vw, 2.4rem)"
                            $paddingLeft="0.4rem"
                            $paddingRight="2.2rem"
                            $marginBottom="0"
                          >
                            Le lien entre les réactions inflammatoires de la MP
                            et les problèmes de la santé
                            générale&nbsp;fait&nbsp;l’objet&nbsp;d’études
                            approfondies depuis plus d’un demi-siècle.
                          </S.SlideTitle>
                          <S.SlideCitation
                            $paddingLeft="0.4rem"
                            $paddingTop="1.2rem"
                          >
                           
                          </S.SlideCitation>
                        </S.SlideTextContent>
                      </S.SlideContent>
                    </S.CarouselSlide>
                  </Flickity>
                </S.CarouselWrapper>
              ) : (
                <>
                  {activeHeart && (
                    <ResultWrapper>
                      <S.ResultDescriptionInner>
                        <S.ResultTitle
                          $paddingTop="1.2rem"
                          $width="87%"
                          $fontSize="3.6vw"
                        >
                          La parodontite liée aux maladies cardiovasculaires
                        </S.ResultTitle>
                        <S.ResultParagraph
                          $paddingTop="0.25rem"
                          $paddingRight="6.4rem"
                          $marginBottom="0.4rem"
                        >
                          Des publications récentes démontrent des preuves
                          convaincantes d’une corrélation importante entre la
                          parodontite et les MCV.
                        </S.ResultParagraph>
                        <S.ResultParagraph
                          $paddingRight="5.6rem"
                          $paddingTop="0.8rem"
                        >
                          Les MCV sont la principale cause de mortalité dans le
                          monde entier.
                        </S.ResultParagraph>
                      </S.ResultDescriptionInner>
                      <S.SlideCitation $paddingLeft="0" $paddingTop="0.6rem">
                        *Fédération mondiale du cœur<sup>1</sup>
                      </S.SlideCitation>
                    </ResultWrapper>
                  )}

                  {activeBrain && (
                    <ResultWrapper>
                      <S.ResultDescriptionInner>
                        <S.ResultTitle
                          $fontSize="clamp(6rem, 10vw, 8rem)"
                          $lineHeight="0.8"
                          $letterSpacing="-4px"
                          $marginBottom="0"
                          $paddingTop="2rem"
                        >
                          22<S.SlideOrdinal>%</S.SlideOrdinal>
                        </S.ResultTitle>
                        <S.ResultTitle
                          $fontSize="clamp(3.5rem, 5.8vw, 4.4rem)"
                          $letterSpacing="-3px"
                          $lineHeight="0.85"
                        >
                          plus élevé
                        </S.ResultTitle>
                        <S.ResultParagraph
                          $paddingRight="7rem"
                          $paddingTop="0.4rem"
                        >
                          Le risque relatif d’être touché par la démence est 22%
                          plus élevé chez les patients atteints d’une grave
                          inflammation parodontale.
                        </S.ResultParagraph>
                      </S.ResultDescriptionInner>
                      <S.SlideCitation $paddingLeft="0">
                        *Journal of Alzheimer's Disease<sup>4</sup>
                      </S.SlideCitation>
                    </ResultWrapper>
                  )}

                  {activeBlood && (
                    <ResultWrapper>
                      <S.ResultDescriptionInner>
                        <S.ResultTitle
                          $fontSize="clamp(24px, 3.8vw, 3rem)"
                          $lineHeight="0.95"
                          $paddingTop="4.2rem"
                          $width="80%"
                        >
                          Complications liées au diabète
                        </S.ResultTitle>
                        <S.ResultParagraph $paddingTop="0" $fontSize="2vw">
                          Le diabète touche un adulte sur 10.<sup>5</sup> La
                          parodontite augmente le risque de
                          complications&nbsp;liées
                          <br />
                          au&nbsp;diabète.
                          <sup>6</sup>
                        </S.ResultParagraph>
                      </S.ResultDescriptionInner>

                      <S.SlideCitation $paddingLeft="0">
                        *National Center for
                        <br />
                        &nbsp;Biotechnology Information
                      </S.SlideCitation>
                    </ResultWrapper>
                  )}
                </>
              )}
            </S.OralSystemicImgWrapperOuter>

            <BottomText
              lines={[
                `Partager ces renseignements avec les patients d’une manière qui encourage de bons soins oraux`,
                "peut contribuer à renforcer les habitudes rituelles et à améliorer la santé générale.",
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
