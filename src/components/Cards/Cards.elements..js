import styled from "styled-components";
import { breakpoint, rem } from "../utils";

export const CardContainer = styled.div`
  ${breakpoint.lg`
    width: ${rem(1110)};
  `}
`;
export const Row = styled.div`
  ${breakpoint.lg`
    display: flex;
    flex-direction: row;    
  `}
`;
export const Column = styled.div`
  ${breakpoint.lg`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    & > * + * {
      margin-top: ${rem(30)};
    }
  `}
`;
