import React from "react";
import styled from "styled-components";

const StyledFoodPill = styled.div`
  padding: 5px;
  background-color: burlywood;
  color: chocolate;
  border-radius: 8px;
  border: solid 2px chocolate;
  margin: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
// const CalorieText = styled.div``;
export default function FoodPill(props) {
  const { name, measure, calories, onFoodPillClick } = props;

  return (
    <StyledFoodPill onClick={() => onFoodPillClick(name, calories)}>
      <span> {name} </span>
      <span> {measure} </span>
      {/* <span> {calories} </span> */}
    </StyledFoodPill>
  );
}
