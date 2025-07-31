import styled from "styled-components";

export const List = styled.ul`
  font-family: "Gotham", sans-serif;
  font-weight: 700;
  color: #019257;
  font-size: 1.54rem;
  margin-inline-start: 2.4rem;
  letter-spacing: -1.4px;
  line-height: 1;
  padding-bottom: 0.8rem;
  user-select: none;
`;

export const ListItem = styled.li`
  margin-bottom: 0.2rem;

  & > span {
    color: #222222;
    font-weight: 600;
    margin-left: -4px;
  }

  sup {
    font-size: 12px;
  }
`;
