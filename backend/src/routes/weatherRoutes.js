import express from 'express';
import {
  getCurrentWeather,
  getWeatherByCoords,
  getWeatherForecast,
  getAirQuality
} from '../controllers/weatherController.js';

const router = express.Router();

// Get current weather by city
router.get('/current', getCurrentWeather);

// Get weather by coordinates
router.get('/coords', getWeatherByCoords);

// Get 5-day forecast
router.get('/forecast', getWeatherForecast);

// Get air quality
router.get('/air-quality', getAirQuality);

export default router;
