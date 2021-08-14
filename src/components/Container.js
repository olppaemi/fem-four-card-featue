import styled from "styled-components";
import { breakpoint, rem } from "./utils";

export const Container = styled.div`
  width: ${rem(311)};
  margin: 0 auto;
  padding-top: ${rem(80)};
  padding-bottom: ${rem(76)};

  ${breakpoint.lg`
    width: ${rem(1110)};
    padding-top: ${rem(86)};
    padding-bottom: ${rem(80)};
  `}
`;

export default Container;
