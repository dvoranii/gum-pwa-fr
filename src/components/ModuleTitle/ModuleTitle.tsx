import { JSX } from "react";
import * as S from "./ModuleTitle.styles";

interface ModuleTitleProps {
  title: string | JSX.Element;
  $marginBottom?: string;
}

export default function ModuleTitle({
  title,
  $marginBottom,
}: ModuleTitleProps) {
  return <S.Title $marginBottom={$marginBottom}>{title}</S.Title>;
}
