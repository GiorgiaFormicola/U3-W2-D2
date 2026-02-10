import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList = function (props) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedBookID, setSelectedBookID] = useState(null);
  const [selectedBookTitle, setSelectedBookTitle] = useState(null);

  // setSelectedBookID = (selectedID) => {
  //   this.setState({
  //     selectedBookID: selectedID,
  //   });
  // };
  // setSelectedBookTitle = (selectedTitle) => {
  //   this.setState({
  //     selectedBookTitle: selectedTitle,
  //   });
  // };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={7} className="ps-5">
            <Row className="justify-content-center">
              <Col className="col-12 px-0">
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Search your book here..."
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                </Form>
              </Col>
              <Row className="justify-content-center g-4 bg-secondary rounded-4 pb-4">
                {props.booksList.filter((b) => b.title.toLowerCase().includes(searchValue)).length === 0 ? (
                  <p className="mb-0 text-center text-light">We're sorry, no books matching your search!</p>
                ) : (
                  props.booksList
                    .filter((b) => b.title.toLowerCase().includes(searchValue))
                    .map((book) => {
                      return (
                        <SingleBook
                          book={book}
                          key={book.asin}
                          setSelectedBookID={setSelectedBookID}
                          selectedID={selectedBookID}
                          setSelectedBookTitle={setSelectedBookTitle}
                        />
                      );
                    })
                )}
              </Row>
            </Row>
          </Col>
          <Col xs={5} className="ps-4 pe-5">
            <h3 className="text-danger text-center border border-1 border-secondary rounded-2" style={{ paddingBottom: "0.08em" }}>
              Reviews
            </h3>
            {!selectedBookID && <p className="text-secondary text-center mt-4 pt-1">Select a book to read its reviews or leave yours!</p>}
            {selectedBookID && <CommentArea bookID={selectedBookID} bookTitle={selectedBookTitle}></CommentArea>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
