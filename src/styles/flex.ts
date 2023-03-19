import styled from "@emotion/styled";

type TFlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type TFlexWrap = "nowrap" | "wrap" | "wrap-reverse";
type TJustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
type TAlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
type TAlignContent = "stretch" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

interface FlexContainerAttribute {
  flexDirection?: TFlexDirection;
  flexWrap?: TFlexWrap;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  alignContent?: TAlignContent;
  gap?: string;
}

interface FlexItemAttribute {
  flexBasis?: string | number;
  flexGrow?: number;
  flexShrink?: string | number;
  flex?: string;
  alignSelf?: TAlignItems;
  order?: number;
  zIndex?: number;
}

export const FlexContainer = styled.div<FlexContainerAttribute>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
`;

export const FlexItem = styled.div<FlexItemAttribute>`
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf};
  order: ${({ order }) => order};
  z-index: ${({ zIndex }) => zIndex};
`;
