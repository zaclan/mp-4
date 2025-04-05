'use server';

import { WeatherResponse } from "@/type";

export async function FetchWeatherData(city: string): Promise<WeatherResponse> {
  const apiKey = process.env.WEATHER_API_KEY;
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`
  );

  if (!res.ok) {
    throw new Error(
      res.status === 429 
        ? 'API rate limit exceeded' 
        : 'Failed to fetch weather data'
    );
  }

  return res.json();
}