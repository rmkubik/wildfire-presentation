import ReactDOM from "react-dom";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ReactModal from "react-modal";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif;
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
  padding: 15px;
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
            <Choice key={choiceData.id} {...choiceData} setChoice={setChoice} />
          );
        })}
      </Grid>
      <ReactModal isOpen={isModalOpen}>
        <p>modal</p>
      </ReactModal>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
