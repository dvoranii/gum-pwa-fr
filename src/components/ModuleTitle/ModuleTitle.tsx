import { JSX } from "react";
import * as S from "./ModuleTitle.styles";

interface ModuleTitleProps {
  title: string | JSX.Element;
}

export default function ModuleTitle({ title }: ModuleTitleProps) {
  return <S.Title>{title}</S.Title>;
}
