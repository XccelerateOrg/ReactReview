import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const Text = ({ toDo, deadline, handleDelete }) => {
  const btn_circle = {
    width: "25px",
    height: "24px",
    lineHeight: "25px",
    textAlign: "center",
    padding: "0",
    borderRadius: "50%",
    fontSize: "0.9rem",
    border: "1px solid CornflowerBlue",
  };
  const btn_circle_i = {
    color: "CornflowerBlue",
    position: "relative",
    top: "-1px",
  };
  const style = {
    color: "CornflowerBlue",
    fontSize: "1em",
  };
  const style2 = {
    color: "Navy",
    fontSize: "1.5em",
  };
  return (
    <div>
      <button
        onClick={handleDelete}
        style={btn_circle}
        className="btn float-right"
      >
        <i
          style={btn_circle_i}
          className="fas fa-times"
        ></i>
      </button>
      <p style={style}>
        Task:
        <p style={style2}>{toDo}</p>
        <br />
        Deadline: <br />
        <p style={style2}>{deadline}</p>
      </p>
    </div>
  );
};
//
const Card = ({
  card,
  handleDelete,
  toggleToDo,
  toggleDoing,
  toggleDone,
}) => {
  const btn_circle = {
    width: "35px",
    height: "35px",
    lineHeight: "35px",
    textAlign: "center",
    padding: "0",
    borderRadius: "50%",
    fontSize: "0.9rem",
    border: "1px solid black",
    margin: "15px",
  };
  const btn_circle_i = {
    position: "relative",
    top: "-1px",
  };
  return (
    <div className="card-body">
      <Text
        toDo={card.toDo}
        deadline={card.deadline}
        handleDelete={handleDelete}
      />
      <div className="row">
        <div className="col-sm">
          <button
            type="button"
            onClick={toggleToDo}
            style={btn_circle}
            className="btn"
          >
            <i
              style={btn_circle_i}
              className="far fa-hourglass"
            ></i>
          </button>
        </div>

        <div className="col-sm">
          <button
            type="button"
            onClick={toggleDoing}
            style={btn_circle}
            className="btn"
          >
            <i
              style={btn_circle_i}
              className="fas fa-hourglass-half"
            ></i>
          </button>
        </div>

        <div className="col-sm">
          <button
            onClick={toggleDone}
            type="button"
            style={btn_circle}
            className="btn"
          >
            <i
              style={btn_circle_i}
              className="fas fa-hourglass-end"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
