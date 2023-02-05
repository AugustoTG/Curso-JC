import { motion } from "framer-motion";
import "../App.css";
import { ICityObject } from "../typeSafe/ICityObject";

function Card({ city }: { city: ICityObject }) {
  if (city.cod != "200") {
    return <h1 className="title">Cidade não encontrada</h1>;
  }

  const randomizedPhoto = Math.floor(Math.random() * 4 + 1);

  return (
    <motion.div
      className="card"
      initial={{ width: 0 }}
      animate={{
        width: 300,
      }}
      exit={{ width: 0 }}
      key={city.name}
    >
      <img src={`cardBackground${randomizedPhoto}.png`}></img>
      <h1 className="city__title">{city?.main?.temp.toFixed(0)} Cº</h1>
      <div className="city__info">
        <label>{city.sys.country}</label>
        <h2>{city.name}</h2>
        <label>
          SENSAÇÃO TÉRMICA <span>{city.main.feels_like}</span>
        </label>
        <div className="maxmin__container">
          <label className="purple">
            MAX <span>{city.main.temp_max}</span>
          </label>
          <label className="purple ml-1">
            MIN <span>{city.main.temp_min}</span>
          </label>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
