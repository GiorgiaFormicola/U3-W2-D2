import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap stylesheet
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <header className="sticky-top shadow-sm">
        <MyNav></MyNav>
        <Welcome></Welcome>
      </header>
      <main className="min-vh-100 bg-dark pt-4 px-3 px-sm-0">
        <BookList></BookList>
      </main>
      <footer className="sticky-bottom">
        <MyFooter></MyFooter>
      </footer>
    </>
  );
}

export default App;
