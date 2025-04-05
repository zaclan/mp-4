import { FetchWeatherData } from "@/lib/FetchWeatherData";

interface PageProps {
  params: Promise<{ city: string }>;
}

export default async function City({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const cityName = resolvedParams.city;
    const data = await FetchWeatherData(cityName);
    
    return (
      <main className="min-h-screen bg-gradient-to-b from-red-200 to-white py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-700">
            Weather for {data.resolvedAddress}
          </h1>
          <div className="grid gap-4">
            {data.days.slice(0, 7).map((day) => (
              <div
              key={day.datetime}
              className="p-4 border rounded-lg bg-white shadow-sm text-black"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-700">{day.datetime}</h2>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p>Temperature: {day.temp}°C</p>
                <p>Feels like: {day.feelslike}°C</p>
                <p>Max: {day.tempmax}°C</p>
                <p>Min: {day.tempmin}°C</p>
                <p>Humidity: {day.humidity}%</p>
                <p>Wind: {day.windspeed} km/h</p>
              </div>
              <p className="mt-2 text-gray-700">Conditions: {day.conditions}</p>
            </div>
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen p-24">
        <div className="max-w-2xl mx-auto text-red-500">
          <h1 className="text-3xl font-bold mb-6">Error</h1>
          <p>{(error as Error).message}</p>
        </div>
      </main>
    );
  }
}