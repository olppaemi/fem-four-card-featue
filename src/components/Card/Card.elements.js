import styled from "styled-components";
import { breakpoint, rem } from "../utils";

export const CardItem = styled.div`
  width: 100%;
  height: ${rem(222)};
  background: #ffffff;
  border-top: 3.5px solid
    ${({ color }) => {
      if (color === "red") {
        return "var(--red)";
      } else if (color === "orange") {
        return "var(--orange)";
      } else if (color === "cyan") {
        return "var(--cyan)";
      } else if (color === "blue") {
        return "var(--blue)";
      } else {
        return "dark";
      }
    }};
  border-radius: ${rem(5)};
  padding: ${rem(32)} ${rem(28)} ${rem(26)} ${rem(28)};
  margin-bottom: ${rem(25)};
  box-shadow: 10px 12px 15px 0 hsla(234, 12%, 34%, 0.1);

  ${breakpoint.lg`
    width: ${rem(350)};
    height: ${rem(250)};
    margin-bottom: 0;
  `}
`;
export const CardTitle = styled.h2`
  color: var(--xdark-blue);
  margin-bottom: 0;
`;
export const CardText = styled.p`
  font-size: ${rem(14)};
  color: var(--grayish-blue);
`;
export const CardImage = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${rem(36)};
`;
