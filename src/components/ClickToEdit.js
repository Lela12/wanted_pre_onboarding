import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  left: 42%;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 30px;
  border: 1px solid #d8e0e6;
  margin-left: 1rem;
`;

const InputEdit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
  outline: none;
  border: 3px solid #03a1fc;
`;

const InputView = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem;

  .view {
    margin-top: 0.5rem;
  }
`;

export const MyInput = ({ value, handleValueChange }) => {
  const inputRef = useRef(null);
  const [newInput, setNewInput] = useState(value);
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    setNewInput(value);
  }, [value]);

  const handleClick = () => {
    setEdit(true);
  };

  const handleBlur = () => {
    setEdit(false);
    handleValueChange(newInput);
  };

  const handleInputChange = (e) => {
    setNewInput(e.target.value);
  };

  return (
    <InputBox>
      {isEdit ? (
        <InputEdit
          type="text"
          value={newInput}
          ref={inputRef}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}>{newInput}</span>
      )}
    </InputBox>
  );
};

const cache = {
  name: "홍길동",
  age: 18,
};

export const ClickToEdit = () => {
  const [name, setName] = useState(cache.name);
  const [age, setAge] = useState(cache.age);

  return (
    <>
      <InputWrapper>
        <InputView>
          <label>이름</label>
          <MyInput
            value={name}
            handleValueChange={(newValue) => setName(newValue)}
          />
        </InputView>
        <InputView>
          <label>나이</label>
          <MyInput
            value={age}
            handleValueChange={(newValue) => setAge(newValue)}
          />
        </InputView>
        <InputView>
          <div className="view">
            이름 : {name} 나이 : {age}
          </div>
        </InputView>
      </InputWrapper>
    </>
  );
};
