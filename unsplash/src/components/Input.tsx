import { Dispatch, SetStateAction, useEffect, useState } from "react";
import debounce from "lodash.debounce";

const fetchCityTemperature = async (cityName: string) => {
  const apiKeyEnv = import.meta.env.VITE_API_KEY || process.env.API_URL;
  const websiteName = "https://api.openweathermap.org/data/2.5/weather";
  const cityQuery = `?q=${cityName}`;
  const apiKey = `&appid=${import.meta.env.VITE_API_KEY}`;
  const metric = "&units=metric";

  const city = await fetch(`${websiteName}${cityQuery}${apiKey}${metric}`, {
    mode: "cors",
  });

  const cityResult = await city.json();
  return cityResult;
};

const searchCity = async (city: string, setCityCard: (arg0: any) => void) => {
  const cityTemperature = await fetchCityTemperature(city);
  setCityCard(cityTemperature);
};

const debouncedSearch = debounce(async (city: any, setCityCard: any) => {
  searchCity(city, setCityCard);
}, 300);

async function handleChange(
  e: string,
  setCityCard: Dispatch<SetStateAction<string>>
) {
  await debouncedSearch(e, setCityCard);
}

function Input({ cityCard, setCityCard }: any) {
  const [tempCity, setTempCity] = useState("");

  return (
    <div className="button__container">
      <input
        placeholder="Digite o nome da cidade"
        onChange={(event) => {
          setTempCity(event.target.value);
          handleChange(event.target.value, setCityCard);
        }}
      ></input>
      <button
        onClick={() => {
          searchCity(tempCity, setCityCard);
        }}
      >
        Procurar Temperatura
      </button>
    </div>
  );
}
export default Input;
