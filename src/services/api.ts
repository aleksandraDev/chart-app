import ENV from "../helpers/envVariables";

const DIFFICULTY_URL = `${ENV.DIFFICULTY_URL}&api_key=${ENV.API_KEY}`;
const HASH_RATE_URL = `${ENV.HASH_RATE_URL}&api_key=${ENV.API_KEY}`;
const PRICE_USD_URL = `${ENV.PRICE_USD_URL}&api_key=${ENV.API_KEY}`;

const jsonify = (res: any) => res.json();

export const dataFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/dual-y-axis-data.json"
).then(jsonify);

export const schemaFetch = fetch(
  "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/dual-y-axis-schema.json"
).then(jsonify);

export const fetchAppleData = fetch(
  "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json"
).then(jsonify);

export const fetchMicrosoftData = fetch(
  "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json"
).then(jsonify);

export const fetchGoogleData = fetch(
  "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json"
).then(jsonify);

export async function difficultyApi() {
  return await fetch(DIFFICULTY_URL).then(jsonify);
}

export async function hashRateApi() {
  return await fetch(HASH_RATE_URL).then(jsonify);
}

export async function priceUsdApi() {
  return await fetch(PRICE_USD_URL).then(jsonify);
}
