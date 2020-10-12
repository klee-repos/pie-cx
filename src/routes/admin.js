require("dotenv").config();
import express from "express";
const router = express.Router();

import OpenWeatherMap from "../api/OpenWeatherMap";

router.post("/get-weather", async (req, res) => {
  // dfcx fullfillment
  let response = req.body;
  let parameters = req.body.sessionInfo.parameters;
  // get weather
  let openWeatherMap = new OpenWeatherMap(process.env.WEATHER_KEY);
  let weather = await openWeatherMap.getWeather(parameters.city);
  // set data in dfcx fullfillment
  response.sessionInfo.parameters.temp = weather.main.temp;
  response.sessionInfo.parameters.temp_max = weather.main.temp_max;
  response.sessionInfo.parameters.temp_min = weather.main.temp_min;
  // send response
  res.send(response);
});

export default router;
