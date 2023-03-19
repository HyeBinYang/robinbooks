import { FlexContainer } from "@/src/styles/flex";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import Bell from "./Icons/Bell";
import SearchBar from "./SearchBar";

const HeaderContainer = styled(FlexContainer)`
  padding: 16px 20px;

  .header__title {
    margin-right: auto;
  }

  .header__search {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-wrap: wrap;
      padding-top: 24px;
    }

    .header__title {
      width: 100%;
      margin-right: 0;
    }

    .header__search {
      width: 100%;
      padding: 16px 0;
      margin-right: 0;
    }
  }
`;

const HeaderLogo = styled.h1`
  font-size: 32px;
  font-weight: 700;

  .emphasis {
    color: #1e9eff;
  }

  @media screen and (max-width: 768px) {
    & {
      font-size: 20px;
    }
  }
`;

const HeaderButtons = styled(FlexContainer)`
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const HeaderButton = styled.div`
  padding: 4px;
`;

const HeaderOnMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        padding: 7px 16px;
        color: rgb(20, 20, 20);
        text-decoration: none;
        border: 1px solid rgb(240, 240, 240);
        border-radius: 20px;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer as="header" alignItems="center">
      <FlexContainer className="header__title" alignItems="center" justifyContent="space-between">
        <HeaderLogo>
          <span className="emphasis">ROBIN</span> WEBTOON
        </HeaderLogo>
        <HeaderOnMobile>
          <Link href="#">로그인</Link>
        </HeaderOnMobile>
      </FlexContainer>
      <div className="header__search">
        <SearchBar />
      </div>
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
