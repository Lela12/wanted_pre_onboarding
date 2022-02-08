import React, { useEffect, useState } from "react";
import styled from "styled-components";

const selectedData = ["rustic", "refurbished", "antique", "vintage", "중고A급"];
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #d3d3d3;
  margin-top: 13rem;

  width: 100%;
  height: 50px;
  border-radius: 15px;

  &:focus-within {
    border-shadow: 0 5px 6px 3px rgba(0, 0, 0, 0.6);
  }
  .close-icon {
    cursor: pointer;
    margin-right: 13px;
    margin-top: 9px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  margin: 0;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
  flex: 1 0 0;
`;

const DropDownContainer = styled.ul`
  list-style: none;
  width: 100%;
  background-color: white;
  margin-top: -10px;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  border-shadow: 0 5px 6px 3px rgba(0, 0, 0, 0.6);
  padding: 10px 5px;

  li {
    padding: 0 1rem;
  }

  li:hover {
    background-color: lightgray;
  }
`;

const AutoComplete = () => {
  const [inputState, setInputState] = useState("");
  const [hasInput, setHasInput] = useState(false);
  const [options, setOptions] = useState(selectedData);

  useEffect(() => {
    if (inputState === "") {
      setHasInput(false);
      setOptions([]);
    }
    if (inputState !== "") {
      setOptions(
        selectedData.filter((el) => {
          return el.includes(inputState);
        })
      );
    }
  }, [inputState]);

  const onChangeInput = (e) => {
    setInputState(e.target.value);
    setHasInput(true);
  };

  const handleDropdown = (data) => {
    setInputState(data);
    setHasInput(true);
  };

  return (
    <>
      <InputContainer>
        <Input type="text" value={inputState} onChange={onChangeInput} />
        <div className="close-icon" onClick={() => {}}>
          &times;
        </div>
      </InputContainer>

      {hasInput ? (
        <DropDownContainer>
          {options.map((option, idx) => {
            return (
              <li key={idx} onClick={() => handleDropdown(option)}>
                {option}
              </li>
            );
          })}
        </DropDownContainer>
      ) : null}
    </>
  );
};

export default AutoComplete;
