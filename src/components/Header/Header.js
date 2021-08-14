import React from "react";
import { HeaderContainer, HeaderText, HeaderTitle } from "./Header.element";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Reliable, efficient delivery</HeaderTitle>
      <HeaderTitle bold>Powered by Technology</HeaderTitle>
      <HeaderText>
        <span>
          Our Artificial Intelligence powered tools use millions of project data
        </span>
        <span>points to ensure that your project is successful</span>
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;
