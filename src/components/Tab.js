import React, { useState } from "react";
import styled from "styled-components";

const TapWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d8d7d6;
  color: #9e9e9e;
  font-weight: bold;
  margin-bottom: 7rem;
  height: 40px;
  margin-left: 60px;
  margin-top: 20px;
  padding-left: 50px;

  .tabList {
    display: flex;
    justify-content: left;
    text-indent: 40%;
    cursor: pointer;
    flex-grow: 1;
  }

  .active {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #4a00ce;
    color: white;
    transition: 1s;
  }
`;

const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = () => {
  const [tapState, setTapState] = useState(0);

  const tabList = [
    { id: "Tab1", content: "Tab menu ONE" },
    { id: "Tab2", content: "Tab menu TWO" },
    { id: "Tab3", content: "Tab menu THREE" },
  ];

  const selectTabHandler = (index) => {
    setTapState(index);
  };

  return (
    <div>
      <TapWrapper>
        {tabList.map((tab, index) => {
          return (
            <li
              key={index}
              className={`${index === tapState ? "tabList active" : "tabList"}`}
              onClick={() => selectTabHandler(index)}
            >
              {tab.id}
            </li>
          );
        })}
      </TapWrapper>
      <Desc>{tabList[tapState].content}</Desc>
    </div>
  );
};

export default Tab;
