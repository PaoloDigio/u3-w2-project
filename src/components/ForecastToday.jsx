import Container from "react-bootstrap/Container";
import { isToday, parseISO } from "date-fns";

const ForecastToday = function (props) {
  const url = "http://openweathermap.org/img/wn/";

  if (!props.forecast || !props.forecast.list) {
    return null;
  }

  const todayForecast = props.forecast.list.filter((singleForecast) => {
    const forecastdate = parseISO(singleForecast.dt_txt);

    return isToday(forecastdate);
  });

  const ifTodayForecastInexistent = todayForecast.length > 0 ? todayForecast : [props.forecast.list[0]];
  return (
    <Container>
      {props.forecast &&
        ifTodayForecastInexistent.map((singleForecast) => {
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
export default ForecastToday;
