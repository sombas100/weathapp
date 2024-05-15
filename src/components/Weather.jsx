import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">London</p>
          <p className="weather-description">Cloudy</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src="weather icons/cloudy.png"
        />
      </div>
    </div>
  );
};

export default Weather;
