import { FlexContainer } from "@/src/styles/flex";
import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface NavStyleProps {
  active?: boolean;
  height?: string;
}

const NavContainer = styled(FlexContainer)<NavStyleProps>`
  padding: 0 20px;
  height: 100%;
`;

const NavLinks = styled(FlexContainer)`
  list-style: none;
`;

const NavLink = styled.li<NavStyleProps>`
  text-align: center;
`;

interface NavigationProps {
  children: ReactNode;
  height?: string;
  active?: boolean;
}

const Navigation = ({ children, height }: NavigationProps) => {
  return (
    <NavContainer as="nav" alignItems="center" justifyContent="space-between" height={height}>
      {children}
    </NavContainer>
  );
};

const LeftItems = ({ children }: NavigationProps) => {
  return (
    <NavLinks as="ul" className="left">
      {children}
    </NavLinks>
  );
};

const RightItems = ({ children }: NavigationProps) => {
  return (
    <NavLinks as="ul" className="right">
      {children}
    </NavLinks>
  );
};

const Item = ({ children, active }: NavigationProps) => {
  return <NavLink active={active}>{children}</NavLink>;
};

Navigation.LeftItems = LeftItems;
Navigation.RightItems = RightItems;
Navigation.Item = Item;

export default Navigation;
