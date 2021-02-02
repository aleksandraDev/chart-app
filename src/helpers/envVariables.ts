import {
  DIFFICULTY_URL,
  HASH_RATE_URL,
  PRICE_USD_URL,
  API_KEY,
} from "./constants";

export default {
  DIFFICULTY_URL: process.env[DIFFICULTY_URL],
  HASH_RATE_URL: process.env[HASH_RATE_URL],
  PRICE_USD_URL: process.env[PRICE_USD_URL],
  API_KEY: process.env[API_KEY],
};
