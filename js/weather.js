const APIKey = "AP2als46oCURGixEvzwV3HUtGAwJm5BC";
const baseUrl = "https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/";
const getCityUrl = (cityName) =>
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getCityWeatherUrl = (cityKey) =>
  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados");
    }
    return response.json();
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const getCityData = (cityName) => fetchData(getCityUrl(cityName));

const getCityWeather = (cityKey) => fetchData(getCityWeatherUrl(cityKey));
