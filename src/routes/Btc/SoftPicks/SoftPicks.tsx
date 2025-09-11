import * as S from "./SoftPicks.styles";
import ThreeSoftPicks from "../../../assets/btc/soft-picks/3-soft-picks.webp";
import ThreeTeethGraphic from "../../../assets/btc/soft-picks/3-teeth-graphic.webp";
import CaptionGraphic1 from "../../../assets/btc/soft-picks/CaptionGraphic1.webp";
import CaptionGraphic2 from "../../../assets/btc/soft-picks/CaptionGraphic2.webp";

export default function BtcSoftPicks() {
  return (
    <S.SoftPicksContainer>
      <S.Row1>
        <S.Column1>
          <S.TextContainer>
            <h2>
              Soft
              <span>
                -Picks<sup>MD</sup>
              </span>{" "}
              ÉVOLUÉS
            </h2>
            <p>
              Manche de caoutchouc plus confortable, plus long et courbé pour
              une meilleure manipulation.
            </p>
          </S.TextContainer>
          <S.TextContainer>
            <h2>
              Soft
              <span>
                -Picks<sup>MD</sup>
              </span>{" "}
              CONFORT FLEX <span>MENTHE</span>
            </h2>
            <p>
              Les fibres de caoutchouc flexibles à saveur de menthe fraîche
              s’insèrent en douceur entre les dents pour éliminer les aliments
              et la plaque de façon sûre et efficace.
            </p>
          </S.TextContainer>
          <S.ImgWrapper1>
            <img src={ThreeTeethGraphic} />
          </S.ImgWrapper1>
        </S.Column1>
        <S.Column2>
          <S.ImgWrapper>
            <img src={ThreeSoftPicks} />
          </S.ImgWrapper>
        </S.Column2>
      </S.Row1>

      <S.Row2>
        <S.Column1And2Wrapper>
          <S.Column1>
            <S.ImgAndTextWrapper>
              <S.ImgWrapper2>
                <img src={CaptionGraphic1} />
              </S.ImgWrapper2>
              <S.TextWrapper>
                <p>
                  <b>Doux pour les gencives</b>
                </p>
                <p>
                  Nos bâtonnets en caoutchouc souple massent les gencives et
                  nettoient les espaces interdentaires sans écorchures. Ils ne
                  contiennent pas de latex et ne présentent aucun danger, même
                  pour les patients sensibles ou allergiques.
                </p>
              </S.TextWrapper>
            </S.ImgAndTextWrapper>
          </S.Column1>
          <S.Column2>
            <S.ImgAndTextWrapper>
              <S.ImgWrapper2>
                <img src={CaptionGraphic2} />
              </S.ImgWrapper2>
              <S.TextWrapper>
                <p>
                  <b>Plus de motivation</b>
                </p>
                <p>
                  Les méthodes de nettoyage interdentaire moins exigeantes
                  augmentent la motivation des patients, la conformité et les
                  résultats.
                </p>
                <small>(Needleman, 2005; Wilder, 2016)</small>
              </S.TextWrapper>
            </S.ImgAndTextWrapper>
          </S.Column2>
        </S.Column1And2Wrapper>
        <S.Column3>
          <S.Column3TextWrapper>
            <p>
              650 Soft-Picks<sup>MD</sup> Évolués
            </p>
            <p>72 sachets de 3</p>
          </S.Column3TextWrapper>
          <S.Column3TextWrapper>
            <p>
              670 Soft-Picks<sup>MD</sup> Confort Flex Menthe
            </p>
            <p>72 sachets de 4</p>
          </S.Column3TextWrapper>
        </S.Column3>
      </S.Row2>
    </S.SoftPicksContainer>
  );
}
