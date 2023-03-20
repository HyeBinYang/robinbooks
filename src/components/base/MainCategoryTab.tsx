import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "../common/Navigation";
import Routes from "../../routes.json";
import { RxHamburgerMenu } from "react-icons/rx";

const Container = styled.div`
  height: 60px;

  li {
    a.menu {
      text-decoration: none;
      font-size: 24px;
      font-weight: 600;
      color: #000;
      padding: 20px 12px;
      transition: opacity 0.1s linear;

      &:not(.active):hover {
        opacity: 0.5;
      }

      &.active {
        color: #1e9eff;
      }
    }

    a.more {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: #000;
      font-size: 15px;
    }
  }
`;

const MainCategoryTab = () => {
  const router = useRouter();

  return (
    <Container>
      <Navigation>
        <Navigation.LeftItems>
          <Navigation.Item>
            <Link
              href={Routes.webtoon.recommendation}
              className={router.pathname === Routes.webtoon.recommendation ? "menu active" : "menu"}
            >
              웹툰
            </Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href="#" className="menu">
              만화
            </Link>
          </Navigation.Item>
        </Navigation.LeftItems>
        <Navigation.RightItems>
          <Navigation.Item>
            <Link href={"#"} className="more">
              <RxHamburgerMenu size={22} />
              전체 카테고리
            </Link>
          </Navigation.Item>
        </Navigation.RightItems>
      </Navigation>
    </Container>
  );
};

export default MainCategoryTab;
