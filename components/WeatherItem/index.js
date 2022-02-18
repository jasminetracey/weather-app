import { fromUnixTime, format } from "date-fns";

const WeatherItem = ({ day }) => {
  return (
    <div>
      <h3 className="text-xl text-emerald-700 font-bold">
        {format(fromUnixTime(day?.current?.dt), "MMMM do, y")}
      </h3>
      <div className="flex space-x-4 items-center">
        <img
          src={`http://openweathermap.org/img/wn/${day?.current?.weather[0]?.icon}.png`}
        />
        <div>
          <span className="block text-lg">{day?.current?.temp} &#8451;</span>
          <span className="mr-4">
            <b>Wind:</b> {day?.current?.wind_speed}m/s
          </span>
          <span>
            <b>Humidity:</b> {day?.current?.humidity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
