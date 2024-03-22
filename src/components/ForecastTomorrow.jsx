import Container from "react-bootstrap/Container";
import { addDays, isSameDay, parseISO, startOfDay } from "date-fns";

const ForecastTomorrow = function (props) {
  const url = "http://openweathermap.org/img/wn/";

  if (!props.forecast || !props.forecast.list) {
    return null;
  }

  const tomorrow = addDays(startOfDay(new Date()), 1);
  const tomorrowForecast = props.forecast.list.filter((singleForecast) => {
    const forecastdate = parseISO(singleForecast.dt_txt);
    return isSameDay(forecastdate, tomorrow);
  });

  return (
    <Container>
      {props.forecast &&
        tomorrowForecast.map((singleForecast) => {
          const date = new Date(singleForecast.dt_txt);
          const formattedTime = date.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
          const arrotondaTemp = singleForecast.main.temp.toFixed(0);
          return (
            <div key={singleForecast.dt} className="text-center">
              <div>{formattedTime}</div>
              <div>
                <img
                  src={`${url}${singleForecast.weather[0].icon}.png`}
                  alt="forecast-image"
                  style={{ height: "100px" }}
                />
              </div>
              <div className="fs-1 ciao">{arrotondaTemp}°C</div>
              <div>Umidità: {singleForecast.main.humidity} %</div>
              <div>Pressione: {singleForecast.main.pressure} hPa</div>
              <div>Vento: {singleForecast.wind.speed} m/s</div>
            </div>
          );
        })}
    </Container>
  );
};
export default ForecastTomorrow;
