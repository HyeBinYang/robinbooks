import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "../common/Navigation";
import Routes from "../../routes.json";

interface MainTabStyleProps {
  active?: boolean;
}

const Container = styled.div<MainTabStyleProps>`
  border-bottom: 1px solid #f0f0f0;

  li {
    padding: 10px;

    a {
      font-size: 14px;
      font-weight: 500;
      color: #787878;
      text-decoration: none;
      transition: opacity 0.2s linear;
    }

    a:not(.active):hover {
      opacity: 0.2;
    }

    a.active {
      color: rgb(20, 20, 20);
    }
  }

  @media screen and (max-width: 768px) {
    & {
      height: 40px;
      background-color: #000;
      border-bottom: none;

      .right {
        display: none;
      }

      li {
        flex: 1;

        a {
          color: #787878;
        }

        a.active {
          color: #fff;
        }
      }
    }
  }
`;

const MainTab = () => {
  const router = useRouter();

  return (
    <Container>
      <Navigation>
        <Navigation.LeftItems>
          <Navigation.Item>
            <Link href={Routes.webtoon.recommendation} className={router.pathname === Routes.webtoon.recommendation ? "active" : ""}>
              웹툰/만화
            </Link>
          </Navigation.Item>
        </Navigation.LeftItems>
        <Navigation.RightItems>
          <Navigation.Item>
            <Link href={"#"}>회원가입</Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href={"#"}>로그인</Link>
          </Navigation.Item>
        </Navigation.RightItems>
      </Navigation>
    </Container>
  );
};

export default MainTab;
