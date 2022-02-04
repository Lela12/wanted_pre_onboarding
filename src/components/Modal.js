import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const Button = styled.div`
  background-color: #4900ce;
  color: white;
  padding: 20px;
  border-radius: 30px;
  cursor: grab;
`;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  position: relative;

  .close-button {
    position: absolute;
    top: 3px;
    cursor: pointer;
  }
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Button onClick={toggleModal}>Open Modal</Button>
      {isOpen ? (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalBody role="dialog" onClick={(e) => e.stopPropagation()}>
            <div className="close-button" onClick={toggleModal}>
              &times;
            </div>
            <div>HELLO CODESTATES!</div>
          </ModalBody>
        </ModalBackground>
      ) : null}
    </Container>
  );
};

export default Modal;
