import React, { useState } from "react";
import styled from "styled-components";

const ToggleWrapper = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Checkbox = styled.input`
  display: none;

  &:checked + span {
    background-position: left;
    background: linear-gradient(to left, #4a00ce 50%, #c5c5c5 50%) left;
    background-size: 200%;
    transition: 1s;

    &:before {
      left: 40px;
      transition: 1s;
    }
  }
`;

const Label = styled.span`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 69px;
  height: 32px;
  background-position: right;
  border-radius: 25px;
  background: linear-gradient(to right, #c5c5c5 50%, #4a00ce 50%) right;
  background-size: 200%;
  transition: 1s;

  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 45px;
    background: white;
    transition: 0.9s;
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const Toggle = ({ onChange }) => {
  const [toggled, setToggeled] = useState(false);

  const toggleHandler = () => {
    setToggeled(!toggled);
  };

  return (
    <>
      <ToggleWrapper>
        <Checkbox type="checkbox" onChange={toggleHandler} />
        <Label />
        <Desc>
          <p>Toggle Switch {toggled ? "ON" : "OFF"}</p>
        </Desc>
      </ToggleWrapper>
    </>
  );
};

export default Toggle;
