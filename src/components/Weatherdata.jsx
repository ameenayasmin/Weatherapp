import React, { useEffect, useState } from 'react'
import './Weather.css';
import WCard from './WCard';

// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6e7e16ecb80652b9c129ed5bb8c77937
const Weatherdata = () => {

  const [searchcity, setSearchcity] = useState("pune");
  const [tempInfo, setTempinfo] = useState({});

  // const [searchValue, setSearchValue] = useState("pune");
  // const [tempInfo, setTempInfo] = useState({});



  const weatherinfo = async () => {

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=6e7e16ecb80652b9c129ed5bb8c77937`;

      
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      // destructuring the api data:

      const {temp,  pressure, humidity} = data.main;
      const {speed} = data.wind;
      const { main: weathermood } = data.weather[0];
      const {sunset, country} = data.sys;
      const{name} = data;  

    

      
      

      const new_weatherinfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        sunset,
        country,
      };

      setTempinfo(new_weatherinfo);
      
    }catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    weatherinfo();

  }, []);


  return (
    <div>
      <div className='Weatherwrapper'>
        <div className='search'>
          <input type='text' placeholder='Enter the city' value={searchcity} onChange={(e) => setSearchcity(e.target.value)} className='searchterm' />
          <button type='button' className='searchButton' onClick={weatherinfo}> Search</button>
        </div>
      </div>

      {/* card */}
      <WCard {...tempInfo} />
      </div>
  )
}

export default Weatherdata