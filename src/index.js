import ReactDOM from "react-dom";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactModal from "react-modal";
import "animate.css";

function updateItem(list, id, updates) {
  const index = list.findIndex(item => item.id === id);

  return [
    ...list.slice(0, index),
    {
      ...list[index],
      ...updates
    },
    ...list.slice(index + 1)
  ];
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
    padding: 24px;
    padding-top: 48px;
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
  background-color: ${({ bgColor }) => bgColor};
  padding: 30px;
  border: ${({ border }) => border};

  &:hover {
    cursor: pointer;
  }
`;

const ReadIndicator = styled.span`
  color: limegreen;
  font-weight: bold;
`;

const Title = styled.h1`
  margin-bottom: 24px;
`;

const Choice = ({ id, color, desc, read, setChoice }) => {
  return (
    <ChoiceContainer
      bgColor={read ? "white" : color}
      border={read ? "1px black solid" : "none"}
      onClick={() => {
        setChoice(id);
      }}
    >
      <p>{desc}</p>
      {read ? <ReadIndicator>✅ Read</ReadIndicator> : ""}
    </ChoiceContainer>
  );
};

const CloseModalButton = styled.button`
  border-radius: 4px;
  font-weight: bold;
  background-color: lightgray;
  color: red;
  border: 2px solid red;
  margin-left: auto;
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;

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
    color: "lightgreen",
    read: false
  },
  {
    id: "asdf",
    desc: "This is an option 2",
    color: "#82E0AA",
    read: false
  },
  {
    id: "qwec",
    desc: "This is an option 3",
    color: "lightgreen",
    read: false
  },
  {
    id: "adqw",
    desc: "This is an option 4",
    color: "#82E0AA",
    read: false
  }
];

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const [choiceList, setChoiceList] = useState(choices);

  return (
    <>
      <GlobalStyle />
      <Title>Choose Your Own Presentation</Title>
      <Grid>
        {choiceList.map(choiceData => {
          return (
            <Choice
              key={choiceData.id}
              {...choiceData}
              setChoice={id => {
                setChoice(id);
                setChoiceList(updateItem(choiceList, id, { read: true }));
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
