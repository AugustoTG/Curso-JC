const buscarTemperaturaCidade = async (nomeDaCidade) => {
    const dadosCidade = await fetch(
      `http://api.weatherapi.com/v1/current.json?q=${nomeDaCidade}&key=7fd89369164a44f29d4113450230402`,
      { mode: "cors" }
    );
    const cidadeInformacao = await dadosCidade.json();
    return cidadeInformacao;
  };
  
  const popularDOM = (infoCidade) => {
    const card = document.getElementById("cidade__card");
    card.innerHTML = "";
  
    const cidadeTitulo = document.createElement("h3");
    cidadeTitulo.innerHTML = infoCidade.location.name;
  
    const cidadeTemp = document.createElement("h3");
    cidadeTemp.innerHTML = infoCidade.current.temp_c;
  
    card.append(cidadeTitulo, cidadeTemp);
  };
  
  const buscar = async () => {
    const nomeCidade = document.getElementById("nome__cidade");
    const infoCidade = await buscarTemperaturaCidade(nomeCidade.value);
    popularDOM(infoCidade);
  };


/*
{
    "location": {
        "name": "Maria Da Fe",
        "region": "Minas Gerais",
        "country": "Brazil",
        "lat": -22.3,
        "lon": -45.38,
        "tz_id": "America/Sao_Paulo",
        "localtime_epoch": 1675806159,
        "localtime": "2023-02-07 18:42"
    },
    "current": {
        "last_updated_epoch": 1675805400,
        "last_updated": "2023-02-07 18:30",
        "temp_c": 22.0,
        "temp_f": 71.6,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 5.6,
        "wind_kph": 9.0,
        "wind_degree": 240,
        "wind_dir": "WSW",
        "pressure_mb": 1015.0,
        "pressure_in": 29.97,
        "precip_mm": 1.2,
        "precip_in": 0.05,
        "humidity": 100,
        "cloud": 75,
        "feelslike_c": 24.5,
        "feelslike_f": 76.1,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 5.0,
        "gust_mph": 3.4,
        "gust_kph": 5.4
    }
}
 */