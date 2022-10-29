import React, { useState } from 'react';
import { useEffect } from 'react';
import "../components/css/style.css";

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2ee05a40fb82c7953a235bec149cef9a`
            const response = await fetch(url);
            const resJSON = await response.json();
            setCity(resJSON.main);
        };
        fetchAPI();
    }, [search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' value={search} onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (<>
                    <div className="info">
                        <h2 className="location">
                            {search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
                        <h3 className="tempmin_max">Pressure: {city.pressure}</h3>
                        <h3 className="tempmin_max">Humidity: {city.humidity}</h3>

                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>
                )}

            </div>
        </>
    )
}

export default TempApp;