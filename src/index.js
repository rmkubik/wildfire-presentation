import ReactDOM from "react-dom";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactModal from "react-modal";
import "animate.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
  }
  
  .modal {
    max-width: 600px;
    margin: 64px auto;
    background-color: lightgray;
    padding: 32px;
    border-radius: 4px;
    padding-left: 64px;
    padding-right: 64px;

    &:focus {
        outline: none;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const Grid = styled.main`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const ChoiceContainer = styled.div`
  border-radius: 6px;
  background-color: ${({ color }) => color};
  padding: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const Choice = ({ id, color, desc, setChoice }) => {
  return (
    <ChoiceContainer
      color={color}
      onClick={() => {
        setChoice(id);
      }}
    >
      {desc}
    </ChoiceContainer>
  );
};

const CloseModalButton = styled.button`
  border-radius: 4px;
  font-weight: bold;
  background-color: lightgray;
  color: red;
  border: 2px solid red;
  /* float: right; */
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;

const AlignRight = styled.div`
  width: 100%;
  text-align: right;
`;

const choices = [
  {
    id: "test",
    desc: "This is an option",
    color: "lightgreen"
  },
  {
    id: "asdf",
    desc: "This is an option 2",
    color: "#82E0AA"
  },
  {
    id: "qwec",
    desc: "This is an option 3",
    color: "lightgreen"
  },
  {
    id: "adqw",
    desc: "This is an option 4",
    color: "#82E0AA"
  }
];

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [choice, setChoice] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Grid>
        {choices.map(choiceData => {
          return (
            <Choice
              key={choiceData.id}
              {...choiceData}
              setChoice={id => {
                setChoice(id);
                setModalOpen(true);
              }}
            />
          );
        })}
      </Grid>
      <ReactModal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={() => {
          setModalOpen(false);
        }}
        shouldCloseOnOverlayClick={true}
        className="modal animated slideInUp faster"
        overlayClassName="modal-overlay"
      >
        <h1>modal</h1>
        <p>{choice}</p>
        <AlignRight>
          <CloseModalButton onClick={() => setModalOpen(false)}>
            Close modal
          </CloseModalButton>
        </AlignRight>
      </ReactModal>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
