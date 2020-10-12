import axios from "axios";

class OpenWeatherMap {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getWeather(city) {
    try {
      let results = await axios({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=imperial`,
      });
      return results.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  
}

export default OpenWeatherMap;
