import React, { useRef, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 500;
`;
const Input = styled.div`
  margin: 20px;

  label {
    margin: 15px;
  }

  input {
    width: 150px;
    height: 30px;
    text-align: center;
    cursor: pointer;
  }

  .InputForm {
    margin: 1px;
    font-size: 13px;
  }
`;

const ClickToEdit = () => {
  const inputRef = useRef(null);
  const [user, setUser] = useState({
    name: "김코딩",
    age: "20",
  });

  const { name, age } = user;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <InputContainer>
        <Input>
          <label>이름</label>
          <input
            autoComplete="nope"
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            ref={inputRef}
          />
        </Input>
        <Input>
          <label>나이</label>
          <input
            autoComplete="nope"
            type="number"
            name="age"
            value={age}
            onChange={onChangeInput}
            ref={inputRef}
          />
        </Input>
        <Input>
          <div className="InputForm">
            이름 {name} 나이 {age}
          </div>
        </Input>
      </InputContainer>
    </>
  );
};

export default ClickToEdit;
