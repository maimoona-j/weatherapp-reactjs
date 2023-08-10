// import React, { useState } from "react";
// import axios from "axios"
// // import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
// import bg1 from "../Assets/w1.jpg";

// export default function WeatherApp() {
//   const [data, setData]=useState({})
//   const [location, setLocation]=useState("")

//   // const apiKey = "22390635125e6d3e8ddf01b3422cd911";
//   // const url =
//   //   "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${apiKey}";

//   // const apiKey = "22390635125e6d3e8ddf01b3422cd911";
// // const url = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${apiKey}`;
// const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={22390635125e6d3e8ddf01b3422cd911}"
// // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${22390635125e6d3e8ddf01b3422cd911}`;

// const searchLocation = (event)=>{
//   if(event.key ==='Enter'){
//     axios.get(url).then ((response)=>{
//       setData(response.data)
//       console.log(response.data);
//     })
//     setLocation('')
//   }
// }

// const handleChange=(event)=>{
//   setLocation(event.target.value)
// }

//   return (
//     <div
//       className="flex  text-white h-screen overflow-hidden font-euclid-circular-a bg-cover bg-center"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
//       }}
//     >
//       <div>
//         <input type="text"
//         className="lg:ml-[480px] ml-12 mt-24 lg:mt-16 py-3 px-12 lg:w-96 rounded-full text-black "
//          placeholder="enter"
//          onChange={handleChange}
//          onKeyDown= {searchLocation}
//           />

//          <div className="border border-red-300 w-56 lg:ml-[650px] lg:mt-16">
//          <h1 className="text-xl font-bold">{data.name}</h1>
//         {data.main ?<p className=" text-4xl font-bold mt-4">{data.main.temp}°F</p> : null}
//        {data.weather ? <p className=" text-lg font-semibold mt-2">{data.weather[0].main}</p> : null}
//          </div>

//        <div className="border border-yellow-100 flex flex-col mt-24   ml-[450px] ">
//         <div className="  flex">
//       { data.main? <p className=" border border-gray-300 h-24 m-5 w-36">{data.main.humidity}</p>: null}
//    { data.main?    <p className="border border-gray-300 m-5 w-36 ">{data.main.wind}</p>:null}
//        {data.main? <p className="border border-gray-300 m-5 w-36">{data.main.feels_like}</p>:null}
//         </div>
//         <div className="flex">
//        {data.main? <p className="border border-gray-300 m-5 w-36 ">{data.main.pressure}</p>:null}
//       { data.main? <p className="border border-gray-300 m-5 w-36 ">{data.main.temp_min}</p>: null}
//       { data.main? <p className="border border-gray-300 m-5 w-36 ">{data.main.temp_max}</p>: null}
//       {/* { data.main <p className="border border-gray-300 m-5 w-36">{data.main.temp_max}</p>: null} */}
//         {/* <p className="border border-gray-300 m-5 w-36 ">temp_min  <AiOutlineArrowDown />:</p>
//         <p className="border border-gray-300 m-5 w-36">temp_max <AiOutlineArrowUp/>:</p> */}
//         </div>
//        {/* <p className=" border border-gray-300 h-24 m-5 w-36">humidty:</p>
//         <p className="border border-gray-300 m-5 w-36 ">wind speed:</p>
//         <p className="border border-gray-300 m-5 w-36">feels like:</p> */}
//        </div>

//       </div>
//     </div>
//   );
// }


// working

// import React, { useState } from "react";
// import axios from "axios";
// import bg1 from "../Assets/w1.jpg";

// export default function WeatherApp() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("");

//   const apiKey = "22390635125e6d3e8ddf01b3422cd911";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

//   const searchLocation = (event) => {
//     if (event.key === "Enter") {
//       axios
//         .get(url)
//         .then((response) => {
//           setData(response.data);
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching weather data:", error);
//         });

//       setLocation("");
//     }
//   };

//   const handleChange = (event) => {
//     setLocation(event.target.value);
//   };

//   return (
//     <div
//       className="flex  text-white h-screen overflow-hidden font-euclid-circular-a bg-cover bg-center"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${bg1})`,
//       }}
//     >
//       <div>
//         <input
//           type="text"
//           className="lg:ml-[480px]  mt-24 lg:mt-16 py-3 px-12 lg:w-[430px] rounded-full text-black "
//           placeholder="enter"
//           onChange={handleChange}
//           onKeyDown={searchLocation}
//         />

//         <div className="border border-red-300 w-56 lg:ml-[620px] lg:mt-16">
//           <h1 className="text-xl font-bold">{data.name}</h1>
//           {data.main ? (
//             <p className=" text-4xl font-bold mt-4">{data.main.temp}°F</p>
//           ) : null}
//           {data.weather ? (
//             <p className=" text-lg font-semibold mt-2">
//               {data.weather[0].main}
//             </p>
//           ) : null}
//         </div>

//         <div className="border border-yellow-100 flex flex-col mt-24 h-[280px]  ml-[470px] ">
//           <div className="  flex">
//             {data.main ? (
//               <p className=" border border-gray-300 h-24 m-5 w-36 pt-5">
//                 humidty <br />
//                 {data.main.humidity}
//               </p>
//             ) : null}
//             {data.main ? (
//               <p className="border border-gray-300 m-5 w-36 pt-5 ">
//                 Wind Speed: <br />
//                 {data.wind.speed}
//               </p>
//             ) : null}

//             {data.main ? (
//               <p className="border border-gray-300 m-5 w-36 pt-5">
//                 feels-like <br />
//                 {data.main.feels_like}
//               </p>
//             ) : null}
//           </div>
//           <div className="flex">
//             {data.main ? (
//               <p className="border border-gray-300 m-5 w-36 h-24 pt-5 ">
//                 pressure <br />
//                 {data.main.pressure}
//               </p>
//             ) : null}
//             {data.main ? (
//               <p className="border border-gray-300 m-5 w-36 pt-5">
//                 temp-min <br />
//                 {data.main.temp_min}
//               </p>
//             ) : null}
//             {data.main ? (
//               <p className="border border-gray-300 m-5 w-36 pt-5 ">
//                 temp-max <br />
//                 {data.main.temp_max}
//               </p>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// trial



import React, { useState } from "react";
import axios from "axios";
import bg1 from "../Assets/w1.jpg";

export default function WeatherApp() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = "22390635125e6d3e8ddf01b3422cd911";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });

      setLocation("");
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
          className="lg:ml-[480px] bg-transparent border border-white  mt-24 lg:mt-16 py-3 px-12 lg:w-[430px] lg:mr-0 mr-[630px]  rounded-full text-white "
          placeholder="Enter your Location"
          onChange={handleChange}
          onKeyDown={searchLocation}
        />

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
