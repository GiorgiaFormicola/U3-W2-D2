import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzA2NDM4NTMsImV4cCI6MTc3MTg1MzQ1M30.Cm9gOiPR0KyOzR70lK_Fl6k-6KIZR3NS3RaJU7DRle0";

const AddComment = function (props) {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: props.bookID,
  });

  useEffect(() => {
    setNewComment({
      ...newComment,
      elementId: props.bookID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookID]);

  return (
    <Form
      className="text-center bg-black bg-opacity-50 rounded-2 mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        fetch(URL, {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            Authorization: key,
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              alert("New comment saved!");

              setNewComment({
                comment: "",
                rate: "1",
                elementId: props.bookID,
              });
              props.getComments();
            } else {
              throw new Error("Error in adding your comment");
            }
          })
          .catch((err) => {
            console.log("ERROR ON SUBMIT", err);
          });
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="mt-3 text-light">Add a comment</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={2}
          className="w-75 mx-auto border-0 bg-secondary bg-opacity-25"
          data-bs-theme="dark"
          placeholder="Leave your comment here..."
          value={newComment.comment}
          onChange={(e) => {
            setNewComment({
              ...newComment,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-light">Leave a rating</Form.Label>
        <Form.Select
          data-bs-theme="dark"
          className="w-75 mx-auto border-0 bg-secondary bg-opacity-25"
          value={newComment.rate}
          onChange={(e) => {
            setNewComment({
              ...newComment,
              rate: e.target.value,
            });
          }}
        >
          <option value="1" className="bg-dark">
            1 star
          </option>
          <option value="2" className="bg-dark">
            2 stars
          </option>
          <option value="3" className="bg-dark">
            3 stars
          </option>
          <option value="4" className="bg-dark">
            4 stars
          </option>
          <option value="5" className="bg-dark">
            5 stars
          </option>
        </Form.Select>
      </Form.Group>

      <Button variant="danger" type="submit" className="w-75 mt-2 mb-4 py-1">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
