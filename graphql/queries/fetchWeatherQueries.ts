import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`  
    query myQuery(
        $current_weather: String
        $daily: String = "time, sunrise, sunset, uv_index_max"
        $hourly: String = "apparent_temperature, dewpoint_2m, precipitation, precipitation_probability, rain, relativehumidity_2m, showers, temperature_2m, time, uv_index"
        $latitude: String!
        $longitude: String!
        $precipitation_unit: String
        $temperature_unit: String
        $timezone: String!
        $windspeed_unit: String
    ) {
        myQuery(
        current_weather: $current_weather
        daily: $daily
        hourly: $hourly
        latitude: $latitude
        longitude: $longitude
        precipitation_unit: $precipitation_unit
        temperature_unit: $temperature_unit
        timezone: $timezone
        windspeed_unit: $windspeed_unit
        ) {
        daily {
            sunrise
            sunset
            time
            uv_index_max
        }
        daily_units {
            sunrise
            sunset
            time
            uv_index_max
        }
        elevation
        generationtime_ms
        hourly {
            apparent_temperature
            dewpoint_2m
            precipitation
            precipitation_probability
            rain
            relativehumidity_2m
            showers
            temperature_2m
            time
            uv_index
        }
        hourly_units {
            apparent_temperature
            dewpoint_2m
            precipitation
            precipitation_probability
            rain
            relativehumidity_2m
            showers
            temperature_2m
            time
            uv_index
        }
        latitude
        longitude
        timezone
        timezone_abbreviation
        utc_offset_seconds
        current_weather {
            is_day
            temperature
            time
            weathercode
            winddirection
            windspeed
        }
    }
  }   
`;

export default fetchWeatherQuery;

