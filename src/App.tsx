import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";
import { IState } from "./models";

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Bill",
      url: "",
      age: 44,
      note: "hello ",
    },
  ]);

  return (
    <div className="App">
      <h2>List</h2>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
