import React, { useState } from "react";
import axios from "axios";
import bg1 from "../Assets/w1.jpg";
import Spinner from "../component/Spinner";

export default function WeatherApp() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "22390635125e6d3e8ddf01b3422cd911";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLoading(true);

      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        })
        .finally(() => {
          setLoading(false);
          setLocation("");
        });
    }
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div
      className="flex  text-white h-screen overflow-hidden font-euclid-circular-a bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
      }}
    >
      <div>
        <input
          type="text"
          className="lg:ml-[480px] bg-transparent border border-white  mt-24 lg:mt-24 py-3 px-12 lg:w-[430px] lg:mr-0 mr-[630px]  rounded-full text-white "
          placeholder="Enter your Location"
          onChange={handleChange}
          onKeyDown={searchLocation}
        />

        {loading ? (
          <Spinner />
        ) : (
          <div className="  w-56 lg:ml-[620px] ml-16 lg:mt-16 mt-16">
            <h1 className="text-xl font-bold">{data.name}</h1>
            {data.main ? (
              <p className=" text-4xl font-bold mt-4">{data.main.temp}°F</p>
            ) : null}
            {data.weather ? (
              <p className=" text-lg font-semibold mt-2">
                {data.weather[0].main}
              </p>
            ) : null}
          </div>
        )}

        <div className=" flex lg:w-auto w-96 font-semibold  flex-col mt-24 lg:h-[280px] h-[400px] lg:ml-[470px]  ">
          <div className="  flex">
            {data.main ? (
              <p className=" border border-gray-300 rounded-md h-24  m-5 w-36 pt-5">
                humidty <br />
                {data.main.humidity}
              </p>
            ) : null}
            {data.main ? (
              <p className="border border-gray-300 rounded-md m-5 w-36 pt-5 ">
                Wind: <br />
                {data.wind.speed}
              </p>
            ) : null}

            {data.main ? (
              <p className="border border-gray-300 rounded-md m-5 w-36 pt-5">
                feels-like <br />
                {data.main.feels_like}
              </p>
            ) : null}
          </div>
          <div className="flex">
            {data.main ? (
              <p className="border border-gray-300 rounded-md m-5 w-36 h-24 pt-5 ">
                pressure <br />
                {data.main.pressure}
              </p>
            ) : null}
            {data.main ? (
              <p className="border border-gray-300 rounded-md m-5 w-36 pt-5">
                temp-min <br />
                {data.main.temp_min}
              </p>
            ) : null}
            {data.main ? (
              <p className="border border-gray-300 rounded-md m-5 w-36 pt-5 ">
                temp-max <br />
                {data.main.temp_max}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
