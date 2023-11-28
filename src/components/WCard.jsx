import React, { useEffect, useState } from 'react'
import './Weather.css';

const WCard = ({ temp, humidity,pressure,weathermood,name,speed,country,sunset,}) => {
  
  // converting minutes into time
  let sec = sunset;
   const time = new Date(sec * 1000).toLocaleString([], { hour: 'numeric', minute: 'numeric' }); 
   const [weatherstate, setWeatherstate] = useState('');

   useEffect(() => {
    if(weathermood){
      switch(weathermood){
        case 'Sunny':
          setWeatherstate("wi-day-sunny");
          break;
        case 'Clouds':
          setWeatherstate("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherstate("wi-fog");
          break;
        case "Rainy":
          setWeatherstate("wi-day-rain");
          break;
        default:
          setWeatherstate("wi-day-sunny");
          break;
      }
    }

   }, [weathermood]);


  return (
    <div>
      <div className="card">
        <div className="weatherIcons">
          <i className={`wi ${weatherstate}`}></i>
        </div>

        {/* weather info */}
        <div className="temperatureInfo">
          <div className="WeatherInfo">
            <div className="temperature">
              <span>{temp}&deg;</span>
            </div>

            <div className="description">
              <div className="weatherCondition">
                {weathermood}
              </div>
              <div className="place">
                {name}, {country}
              </div>

            </div>
            </div>

          <div className="currentDate">
            <div className="date">{new Date().toLocaleString()}</div>

          </div>
          </div>


        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {time} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {`${humidity}%`}<br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {Math.ceil(pressure)} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {`${speed}km/h`} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
        {/* <div className='mainflex'>
<div className='leftside'>
  <div>
    <p>Sunset</p>
    <p>4.00pm</p>
  </div>
  <div>
    <p>Sunset</p>
    <p>4.00pm</p>
  </div>
</div>
<div className='rightside'>
<div>
    <p>Sunset</p>
    <p>4.00pm</p>
  </div>
  <div>
    <p>Sunset</p>
    <p>4.00pm</p>
  </div>
</div>

</div> */}

      </div>
      </div>
  )
}

export default WCard