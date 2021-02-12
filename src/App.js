import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import SearchWeather from "./components/SearchWeather";
import Weather from "./components/Weather";

const App = () => {
  // const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [city, setCity] = useState();

  const getWeatherData = async () => {
    // setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kalamazoo&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const request = axios.get(url);
    const response = await request;

    setWeather(response.data.weather[0].description);
    setTemperature(response.data.main.temp);
    setCity(response.data.name);
    // setLoading(false);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div >
      <SearchWeather getWeatherData={getWeatherData} />
      <Weather weather={weather} temperature={temperature} city={city} />
    </div>
  );
};

export default App;