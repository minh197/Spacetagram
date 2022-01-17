import "./App.css";
import { useEffect, useState } from "react";
import { getPicture, getPicturesByDate } from "./controller/photoController";
import { Photo } from "./component/Photo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Loader from "./Loader";

const App = () => {
  const [response, setResponse] = useState([]); // response from API

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isLoaded, setIsLoaded] = useState(false);

  const search = async () => {
    if (startDate === null || endDate === null) {

      const result = await getPicture();
      // console.log(result)
      // isLoading = true
      if (result) {
        setResponse([result]); // still a list even though length is 1
      } else {
        alert("No pictures found for those dates!"); // In case there are no pictures for selected dates
      }
    } else {
      // if there is a given date range
      const results = await getPicturesByDate(startDate, endDate);
      console.log(results[0]);

      if (results[0].date !== null) {
        setResponse(results);
      } else {
        alert("No pictures found for those dates!"); // In case there are no pictures for selected dates
      }
    }
  };


  const picturesList = response.map((item) => {
    // isLoading = false
    return (
      <Photo
        url={item.url}
        title={item.title}
        explanation={item.explanation}
        date={item.date}
      />
    );
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Spacetagram</h1>
        <p>
          Brought to you by NASA's Astronomy Photo of the Day{" "}
          <a href="https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#">
            {" "}
            (APOD){" "}
          </a>
          API 🌌
        </p>
        <div style={{ fontSize: 15, paddingBottom: 15 }}>
          Either click "Get Pictures!" to get today's Picture of the Day, or
          select both a start and end date to get pictures from all those dates
        </div>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <DatePicker
                placeholderText="Select date!"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
              />
            </Col>
            <Col>
              <button className="button" onClick={() => search()}>
                Get Pictures!
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Posts-container">{picturesList}</div>
    </div>
  );
};

export default App;
