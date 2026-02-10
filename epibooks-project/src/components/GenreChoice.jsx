import Col from "react-bootstrap/Col";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const GenreChoice = function (props) {
  return (
    <Col className="px-0 mb-4">
      <ToggleButtonGroup type="radio" name="options" defaultValue={0} className="w-100">
        <ToggleButton
          id="tbg-radio-1"
          value={0}
          variant="outline-secondary"
          className="text-light"
          onChange={(e) => {
            props.setSelectedGenre(props.genresData[e.target.value]);
            props.setSelectedBookID(null);
            props.setSelectedBookTitle(null);
          }}
        >
          Fantasy
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-2"
          value={1}
          variant="outline-secondary"
          className="text-light"
          onChange={(e) => {
            props.setSelectedGenre(props.genresData[e.target.value]);
            props.setSelectedBookID(null);
            props.setSelectedBookTitle(null);
          }}
        >
          History
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-3"
          value={2}
          variant="outline-secondary"
          className="text-light"
          onChange={(e) => {
            props.setSelectedGenre(props.genresData[e.target.value]);
            props.setSelectedBookID(null);
            props.setSelectedBookTitle(null);
          }}
        >
          Horror
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-4"
          value={3}
          variant="outline-secondary"
          className="text-light"
          onChange={(e) => {
            props.setSelectedGenre(props.genresData[e.target.value]);
            props.setSelectedBookID(null);
            props.setSelectedBookTitle(null);
          }}
        >
          Romance
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-5"
          value={4}
          variant="outline-secondary"
          className="text-light"
          onChange={(e) => {
            props.setSelectedGenre(props.genresData[e.target.value]);
            props.setSelectedBookID(null);
            props.setSelectedBookTitle(null);
          }}
        >
          Scifi
        </ToggleButton>
      </ToggleButtonGroup>
    </Col>
  );
};

export default GenreChoice;
