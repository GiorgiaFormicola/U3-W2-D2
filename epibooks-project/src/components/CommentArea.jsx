import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzA2NDM4NTMsImV4cCI6MTc3MTg1MzQ1M30.Cm9gOiPR0KyOzR70lK_Fl6k-6KIZR3NS3RaJU7DRle0";

const CommentArea = function (props) {
  const [commentsArray, setCommentsArray] = useState([]);

  const getComments = () => {
    fetch(URL + props.bookID, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the book comments");
        }
      })
      .then((bookCommentsArray) => {
        setCommentsArray(bookCommentsArray);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getComments();
  }, [props.bookID]);

  return (
    <>
      {!props.bookID && <h4>Select a book to leave a comment or read its reviews!</h4>}
      {props.bookID && (
        <>
          <h4 className="text-light text-center pt-3" style={{ marginTop: "0.55em", marginBottom: "1.25em" }}>
            {props.bookTitle}
          </h4>
          <CommentList commentsArray={commentsArray}></CommentList>
          <AddComment bookID={props.bookID} getComments={getComments}></AddComment>
        </>
      )}
    </>
  );
};

export default CommentArea;
