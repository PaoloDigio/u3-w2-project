import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import ForecastToday from "./ForecastToday";
import ForecastTomorrow from "./ForecastTomorrow";
import InputForecast from "./InputForecast";

const Home = function () {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(false);

  const handleSearchClick = () => getLocation();

  const weatherApi = "http://api.openweathermap.org/geo/1.0/direct?q=";
  const forecastApi = "https://api.openweathermap.org/data/2.5/forecast?";
  const keyPC = "a9488ea031c0bb37f1098853d2689895";

  const getLocation = () => {
    fetch(weatherApi + search + "&appid=" + keyPC)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore recupero località");
        }
      })
      .then((locationSearch) => {
        console.log("Località cercata:", locationSearch);
        setLocation(locationSearch);

        if (locationSearch && locationSearch.length > 0) {
          const { lat, lon } = locationSearch[0];
          console.log(lat, lon);
          getForecast(lat, lon);
        }
      })
      .catch((err) => console.log("err", err));
  };

  const getForecast = (lat, lon) => {
    fetch(`${forecastApi}lat=${lat}&lon=${lon}&appid=${keyPC}&units=metric`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore recupero previsioni");
        }
      })
      .then((previsioni) => {
        console.log("previsioni", previsioni);
        setForecast(previsioni);
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <InputForecast search={search} setSearch={setSearch} handleSearchClick={handleSearchClick} />
        </Col>
      </Row>
      {location && location.length === 0 && (
        <Row className="text-center ">
          <Col xs={4} className="me-auto ms-auto">
            <Alert variant="primary" className="text-center my-5">
              Città non valida
            </Alert>
          </Col>
        </Row>
      )}
      <Row>
        <Col className="text-light mb-5">
          {forecast && (
            <>
              <h2 className="text-center my-5 display-5">
                Città {location[0].name} - {location[0].state} - {location[0].country}
              </h2>
            </>
          )}
          <Container>
            {forecast && <h3 className="mb-3 text-center">Oggi</h3>}
            <ForecastToday forecast={forecast} />
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="text-light mb-5">
          <Container>
            {forecast && <h3 className="mb-3 text-center">Domani</h3>}
            <ForecastTomorrow forecast={forecast} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
