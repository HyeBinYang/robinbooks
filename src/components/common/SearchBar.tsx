import { FlexContainer } from "@/src/styles/flex";
import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";
import Search from "./Icons/Search";

const SearchBarContainer = styled(FlexContainer)`
  height: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;

  .icon {
    width: 20px;
    margin-right: 10px;
  }

  input {
    width: calc(100% - 20px);
    height: 100%;
    outline: none;
    border: none;
    font-size: 16px;
    letter-spacing: 0.01em;
    background-color: transparent;
  }
`;

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBar = ({ ...inputAttrs }: SearchBarProps) => {
  return (
    <SearchBarContainer as="form" alignItems="center">
      <div className="icon">
        <Search width="20px" height="20px" color="#787878" />
      </div>
      <input type="text" {...inputAttrs} />
    </SearchBarContainer>
  );
};

export default SearchBar;
