import React from "react";
import styled from "styled-components";
const Header = styled.h1`
  padding-bottom: 20px;
`;
export default function HeaderElement(props) {
  return <Header> {props.header} </Header>;
}
