import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const SingleComment = function (props) {
  return (
    <ListGroup.Item className="d-flex justify-content-between px-2  align-items-baseline">
      <span className="fst-italic">"{props.commentText}"</span>
      <small className="text-secondary d-flex align-items-center gap-1">
        <span>{props.commentRate}/5</span>
        <i className="bi bi-star-fill" style={{ fontSize: "0.8em" }}></i>
      </small>
    </ListGroup.Item>
  );
};

export default SingleComment;
