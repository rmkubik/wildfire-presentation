import ReactDOM from "react-dom";
import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactModal from "react-modal";
import "animate.css";

import choices from "./choices";

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

    ul {
        font-size: 1.5rem;
    }

    li {
        padding-bottom: 10px;
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

  .fadeToWhite {
    transition-property: background-color;
    transition-timing-function: ease-out;
    background-color: white;
    transition-duration: 1000ms;
  }
`;

function useAnimatedExit(ref) {
  const animate = animation => {
    return new Promise(resolve => {
      ref.current.addEventListener("animationend", () => {
        resolve();
      });
      ref.current.classList.add("animated");
      ref.current.classList.add(animation);
    });
  };

  return animate;
}

const Grid = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

const ChoiceContainer = styled.div`
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor};
  padding: 30px;
  border: ${({ border }) => border};
  font-size: 1.5rem;
  margin: 10px;
  width: 180px;

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

const Choice = ({ color, desc, read, setChoice }) => {
  return (
    <ChoiceContainer
      bgColor={read ? "white" : color}
      className={read ? "animated fadeToWhite" : ""}
      border={read ? "1px black solid" : "none"}
      onClick={() => {
        setChoice();
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

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const [choiceList, setChoiceList] = useState(choices);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const animateModalExit = useAnimatedExit(modalRef);
  const animateOverlayExit = useAnimatedExit(overlayRef);

  return (
    <>
      <GlobalStyle />
      <Title>Choose Your Own Presentation - Lessons from Wildfire Swap</Title>
      <Grid>
        {choiceList.map(choiceData => {
          return (
            <Choice
              key={choiceData.id}
              {...choiceData}
              setChoice={() => {
                setChoice(choiceData);
                setChoiceList(
                  updateItem(choiceList, choiceData.id, { read: true })
                );
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
        contentRef={node => {
          modalRef.current = node;
        }}
        overlayRef={node => {
          overlayRef.current = node;
        }}
      >
        ><h1>{choice && choice.desc}</h1>
        {choice && (choice.content || choice.id)}
        <AlignRight>
          <CloseModalButton
            onClick={() => {
              animateOverlayExit("fadeOut");
              modalRef.current.classList.remove("slideInUp");
              animateModalExit("fadeOutDown").then(() => setModalOpen(false));
            }}
          >
            Close modal
          </CloseModalButton>
        </AlignRight>
      </ReactModal>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
