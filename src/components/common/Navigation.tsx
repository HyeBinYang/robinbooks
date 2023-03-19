import { FlexContainer } from "@/src/styles/flex";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Routes from "../../routes.json";

interface NavStyleProps {
  active?: boolean;
}

const NavContainer = styled(FlexContainer)<NavStyleProps>`
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;

  @media screen and (max-width: 768px) {
    & {
      height: 40px;
      background-color: #000;
      border-bottom: none;
    }
  }
`;

const NavLinks = styled(FlexContainer)`
  list-style: none;

  @media screen and (max-width: 768px) {
    &.right {
      display: none;
    }
  }
`;

const NavLink = styled.li<NavStyleProps>`
  padding: 10px;
  text-align: center;

  a {
    font-size: 14px;
    font-weight: 500;
    color: ${({ active }) => (active ? "rgb(20, 20, 20)" : "#787878")};
    text-decoration: none;
    transition: opacity 0.2s linear;
  }

  a:hover {
    opacity: ${({ active }) => (active ? 1 : 0.2)};
  }

  @media screen and (max-width: 768px) {
    & {
      flex: 1;
    }

    a {
      color: ${({ active }) => (active ? "#fff" : "#787878")};
    }
  }
`;

const Navigation = () => {
  const router = useRouter();

  return (
    <NavContainer as="nav" alignItems="center" justifyContent="space-between">
      <NavLinks as="ul" className="left">
        <NavLink active={router.pathname === Routes.webtoon.recommendation}>
          <Link href={Routes.webtoon.recommendation}>웹툰/만화</Link>
        </NavLink>
      </NavLinks>
      <NavLinks as="ul" className="right">
        <NavLink>
          <Link href={"#"}>회원가입</Link>
        </NavLink>
        <NavLink>
          <Link href={"#"}>로그인</Link>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;
