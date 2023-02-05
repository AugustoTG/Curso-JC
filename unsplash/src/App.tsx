import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import { ICityObject } from "./typeSafe/ICityObject";

function App() {
  const [cityCard, setCityCard] = useState<ICityObject | null>(null);

  return (
    <div className="App">
      <h1>WEATHER API</h1>
      <p>Busque aqui a temperatura de qualquer cidade do mundo</p>
      <Input setCityCard={setCityCard}></Input>
      {cityCard !== null && <Card city={cityCard}></Card>}
    </div>
  );
}

export default App;
