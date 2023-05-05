interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
}

interface Daily {
    sunrise: [string];
    sunset: [string];
    time: [string];
    uv_index_max: [number];
}

interface DailyUnits {
    sunrise: string;
    sunset: string;
    time: string;
    uv_index_max: string;
}

interface Hourly {
  apparent_temperature: [number];
  dewpoint_2m: [number];
  precipitation: [number];
  precipitation_probability: [number];
  rain: [number]
  relativehumidity_2m: [number];
  showers: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
}

interface HourlyUnits {
    apparent_temperature: string;
    dewpoint_2m: string;
    precipitation: string;
    precipitation_probability: string;
    rain: string;
    relativehumidity_2m: string;
    showers: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
  }

  interface Root {
    current_weather: CurrentWeather;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
  }