import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Button from "react-bootstrap/Button";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzA2NDM4NTMsImV4cCI6MTc3MTg1MzQ1M30.Cm9gOiPR0KyOzR70lK_Fl6k-6KIZR3NS3RaJU7DRle0";

const SingleComment = function (props) {
  const removeComment = function () {
    fetch(URL + props.commentID, {
      method: "DELETE",
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Comment successfully deleted!");
          props.getComments();
        } else {
          throw new Error("Error in deleting the selected comment");
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between px-2  align-items-baseline">
      <span className="fst-italic">"{props.commentText}"</span>
      <div className="d-flex gap-3">
        <small className="text-secondary d-none d-lg-flex align-items-center gap-1">
          <span>{props.commentRate}/5</span>
          <i className="bi bi-star-fill" style={{ fontSize: "0.8em" }}></i>
        </small>
        <Button
          size="sm"
          variant="danger"
          onClick={() => {
            removeComment();
          }}
        >
          DELETE
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
