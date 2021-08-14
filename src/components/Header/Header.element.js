import styled from "styled-components";
import { breakpoint, rem } from "../utils";

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: ${rem(76)};

  ${breakpoint.lg`
    margin-bottom: ${rem(64)};
  `}
`;

export const HeaderTitle = styled.h1`
  font-size: ${rem(25)};
  line-height: 1;
  color: var(--xdark-blue);
  font-weight: ${({ bold }) => (bold ? "600" : "200")};

  ${breakpoint.lg`
    font-size: ${rem(32)};
  `}
`;

export const HeaderText = styled.p`
  color: var(--grayish-blue);

  ${breakpoint.lg`
    span {
      display: block;
    }
  `}
`;
