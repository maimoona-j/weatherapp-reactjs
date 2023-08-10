import logo from './logo.svg';
import './App.css';
import WeatherApp from './component/WeatherApp';

function App() {
  // const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={22390635125e6d3e8ddf01b3422cd911}"
  // const url = "https://api.openweathermap.org/data/2.5/weather?q={islamabad}appid={22390635125e6d3e8ddf01b3422cd911}"
  return (
    <div className="App">
      <WeatherApp/>
    </div>
  );
}

export default App;
