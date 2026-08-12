/* Vamos criar um componente funcional */

import Ale from "./components/Nome/Ale";
import Andrew from "./components/Nome/Andrew";
import Pedro from "./components/Nome/Pedro";

export default function App() {
  return (
    <div>
      <h1>Olá mundo</h1>
      <Pedro />
      <Andrew />
      <Ale />
    </div>
  );
}
