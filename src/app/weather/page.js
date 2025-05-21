async function getWeatherData() {
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true');
  
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  return res.json();
}

export default async function WeatherPage() {
  const weatherData = await getWeatherData();

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-3xl font-bold mb-8">Weather Forecast</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
        
        <div className="space-y-2">
          <p><span className="font-medium">Location:</span> New York, US</p>
          <p><span className="font-medium">Temperature:</span> {weatherData.current_weather.temperature}°C</p>
          <p><span className="font-medium">Conditions:</span> {weatherData.current_weather.weathercode === 0 ? 'Clear sky' : 'Cloudy'}</p>
          <p><span className="font-medium">Wind Speed:</span> {weatherData.current_weather.windspeed} km/h</p>
        </div>
      </div>
    </main>
  );
}