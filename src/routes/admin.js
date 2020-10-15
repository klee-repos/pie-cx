require("dotenv").config();
import express from "express";
const router = express.Router();

import OpenWeatherMap from "../api/OpenWeatherMap";

// authentication
const auth = require("../auth");
router.use(auth);

router.post("/get-weather", async (req, res) => {
  // dfcx fullfillment
  let response = req.body;
  let parameters = req.body.sessionInfo.parameters;
  console.log(parameters);
  // get weather
  let openWeatherMap = new OpenWeatherMap(process.env.WEATHER_KEY);
  let weather = await openWeatherMap.getWeather(
    parameters.city,
    parameters.state
  );
  // set data in dfcx fullfillment
  response.sessionInfo.parameters.temp = weather.main.temp;
  response.sessionInfo.parameters.temp_max = weather.main.temp_max;
  response.sessionInfo.parameters.temp_min = weather.main.temp_min;
  // send response
  res.send(response);
});

router.post("/emit", async (req, res) => {
  let socket = req.app.get('io');
  socket.to(req.body.socketId).emit('message', {text: 'hello world'});
  res.sendStatus(200);
})

router.post("/test-alert", async (req, res) => {
  let socket = req.app.get('io');
  console.log(req.body.socketId)
  socket.to(req.body.socketId).emit('message', {text: 'hello world'});
  res.sendStatus(200);
})

export default router;
