import React, { useState } from "react";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Card from "./Card";
import Form from "./Form";
const DONE = "done";
const TODO = "toDo";
const DOING = "doing";

const Trello = () => {
  const [newToDo, setNewToDo] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [cards, setCards] = useState([
    {
      toDo: "Make Croissants",
      deadline: "Sunday Brunch",
      completed: TODO,
      id: 0,
    },
  ]);
  const [showAll, setShowAll] = useState(true);
  // todo change handler
  const toDoChangeHandler = (event) => {
    console.log(event.target.value);
    setNewToDo(event.target.value);
  };

  // deadline change handler
  const deadlineChangeHandler = (event) => {
    console.log(event.target.value);
    setNewDeadline(event.target.value);
  };

  // add card
  const addCard = (event) => {
    console.log("adding");
    event.preventDefault();
    const cardObject = {
      toDo: newToDo,
      deadline: newDeadline,
      completed: TODO,
      id: cards.length,
    };
    setCards(cards.concat(cardObject));
    console.log(cardObject);
    console.log(cards);
    setNewToDo("");
    setNewDeadline("");
  };
  // handle delete
  const handleDelete = (id) => {
    console.log(id);
    setCards(cards.filter((card) => card.id !== id));
    console.log("deleted");
  };

  // toggle to do
  const toggleToDo = (id) => {
    const card = cards.find((card) => card.id === id);
    console.log(card);
    const changedCard = { ...card, completed: TODO };
    // you changed the state here, but you need to
    console.log(changedCard);
    setCards(
      cards.map((c) => (c.id !== id ? c : changedCard))
    );
  };

  // toggle doing
  const toggleDoing = (id) => {
    const card = cards.find((card) => card.id === id);
    console.log(card);
    const changedCard = { ...card, completed: DOING };
    console.log(changedCard);
    setCards(
      cards.map((c) => (c.id !== id ? c : changedCard))
    );
  };
  // toggle done
  const toggleDone = (id) => {
    const card = cards.find((card) => card.id === id);
    console.log(card);
    const changedCard = { ...card, completed: DONE };
    console.log(changedCard);
    setCards(
      cards.map((c) => (c.id !== id ? c : changedCard))
    );
  };

  // to do rows
  const showToDo = showAll
    ? cards.filter((card) => card.completed === TODO)
    : cards.filter((card) => card.id === 3423423);

  const toDoRows = () =>
    showToDo.map((card) => (
      <Card
        key={card.id}
        handleDelete={() => handleDelete(card.id)}
        card={card}
        toggleToDo={() => toggleToDo(card.id)}
        toggleDoing={() => toggleDoing(card.id)}
        toggleDone={() => toggleDone(card.id)}
      />
    ));

  // doing rows
  const showDoing = showAll
    ? cards.filter((card) => card.completed === DOING)
    : cards.filter((card) => card.id === 3423423);

  const doingRows = () =>
    showDoing.map((card) => (
      <Card
        key={card.id}
        handleDelete={() => handleDelete(card.id)}
        card={card}
        toggleToDo={() => toggleToDo(card.id)}
        toggleDoing={() => toggleDoing(card.id)}
        toggleDone={() => toggleDone(card.id)}
      />
    ));

  // done rows
  const showDone = showAll
    ? cards.filter((card) => card.completed === DONE)
    : cards.filter((card) => card.id === 3423423);
  const doneRows = () =>
    showDone.map((card) => (
      <Card
        key={card.id}
        handleDelete={() => handleDelete(card.id)}
        card={card}
        toggleToDo={() => toggleToDo(card.id)}
        toggleDoing={() => toggleDoing(card.id)}
        toggleDone={() => toggleDone(card.id)}
      />
    ));

  return (
    <div className="container App">
      <Form
        addCard={addCard}
        newToDo={newToDo}
        toDoChangeHandler={toDoChangeHandler}
        newDeadline={newDeadline}
        deadlineChangeHandler={deadlineChangeHandler}
      />

      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <div className="card">
              <div className="card-header"> To Do </div>
              {toDoRows()}
            </div>
          </MDBCol>

          <MDBCol md="4">
            <div className="card">
              <div className="card-header">Doing </div>
              {doingRows()}
            </div>
          </MDBCol>

          <MDBCol md="4">
            <div className="card">
              <div className="card-header"> Done </div>
              {doneRows()}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Trello;
