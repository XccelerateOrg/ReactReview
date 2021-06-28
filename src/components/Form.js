import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const Form = ({
  addCard,
  newToDo,
  toDoChangeHandler,
  newDeadline,
  deadlineChangeHandler,
}) => {
  return (
    <div className="container">
      <form className="md-form" onSubmit={addCard}>
        <MDBInput
          label="Task"
          className="form-control"
          value={newToDo}
          onChange={toDoChangeHandler}
        />
        <br />
        <MDBInput
          label="Deadline"
          className="form-control"
          value={newDeadline}
          onChange={deadlineChangeHandler}
        />
        <div className="center">
          <button
            className="btn btn-outline-dark waves-effect"
            type="submit"
          >
            {" "}
            Add{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
