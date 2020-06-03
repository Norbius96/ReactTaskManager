import React, { useEffect, useState } from 'react';

import '../styles/weather.css';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Weather() {

    const [weather, setWeather] = useState([]);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeather();
    }, []);

    const getWeather = async () => {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition(
                function (position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    fetchWeather(lat, lon);
                }, function (positionError) {
                    fetchWeather(52.23, 21.01)
                }
            )
        }
    }

    const fetchWeather = async (lat, lon) => {
        const key = ``;
        const userLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        try {
            const apiWeather = await fetch(userLocation);
            const data = await apiWeather.json();
            setWeather(data);
            setLoading(false);
            setImage(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        } catch (err) {
            console.error(err)
        }
    }
    if (loading) {
        return (
            <div id="weather">
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            </div>
        );
    };



    return (
        <div id="weather">
            <h1>{weather.name}</h1>
            <img src={image} alt={weather.weather[0].description} title={weather.weather[0].description} />
            <h2>{Math.floor(weather.main.temp - 273.15)} °C</h2>
        </div >
    );
}

export default Weather;
