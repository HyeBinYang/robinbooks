import { FlexContainer } from "@/src/styles/flex";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import Bell from "./Icons/Bell";
import SearchBar from "./SearchBar";

const HeaderContainer = styled(FlexContainer)`
  height: 75px;
  padding: 16px 20px;
`;

const HeaderLogo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-right: auto;

  .emphasis {
    color: #1e9eff;
  }
`;

const HeaderButtons = styled(FlexContainer)``;

const HeaderButton = styled.div`
  padding: 4px;
`;

const Header = () => {
  return (
    <HeaderContainer as="header" alignItems="center">
      <HeaderLogo>
        <span className="emphasis">ROBIN</span> WEBTOON
      </HeaderLogo>
      <SearchBar />
      <HeaderButtons gap="12px">
        <HeaderButton>
          <Link href={"#"}>
            <Bell width="28px" height="28px" />
          </Link>
        </HeaderButton>
        <HeaderButton>
          <Link href={"#"}>
            <Bell width="28px" height="28px" />
          </Link>
        </HeaderButton>
        <HeaderButton>
          <Link href={"#"}>
            <Bell width="28px" height="28px" />
          </Link>
        </HeaderButton>
        <HeaderButton>
          <Link href={"#"}>
            <Bell width="28px" height="28px" />
          </Link>
        </HeaderButton>
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;
