import react from "react";
import pi, { DoublePi, TriplePi } from "./math";

function List() {
  return (
    <ol>
      List of names
      <li>{pi}</li>
      <li>{DoublePi()}</li>
      <li>{TriplePi()}</li>
    </ol>
  );
}

export default List;
