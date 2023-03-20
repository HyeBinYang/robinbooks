import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "../common/Navigation";
import Routes from "../../routes.json";

const Container = styled.div`
  margin: 10px 0;
  padding-left: 10px;

  li {
    display: inline-flex;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 34px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: 0px 11px;
      color: #141414;
      border-radius: 40px;
      transition: all 0.1s linear;

      &.active {
        background-color: #1e9eff;
        color: #fff;
      }

      &:not(.active):hover {
        opacity: 0.3;
      }
    }
  }
`;

const SubCategoryTab = () => {
  const router = useRouter();

  return (
    <Container>
      <Navigation>
        <Navigation.LeftItems>
          <Navigation.Item>
            <Link href={Routes.webtoon.recommendation} className={router.pathname === Routes.webtoon.recommendation ? "active" : ""}>
              추천
            </Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href={Routes.webtoon.romance} className={router.pathname === Routes.webtoon.romance ? "active" : ""}>
              로맨스
            </Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href="#">BL</Link>
          </Navigation.Item>
        </Navigation.LeftItems>
      </Navigation>
    </Container>
  );
};

export default SubCategoryTab;
