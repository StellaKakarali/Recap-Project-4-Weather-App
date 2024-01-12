import logo from "./logo.svg";
import "./App.css";
import ActivityForm from "./ActivityForm";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  // const box = { name: "baum streicheln", isForGoodWeather: false };
  // const { name, isForGoodWeather } = box;
  // console.log(name);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
    //setActivities([newActivity]);
    // console.log("App: ", activities);
    console.log("ich bin eine Aktivität: ", newActivity);
  }
  //console.log(activities);
  return (
    <main>
      <ActivityForm onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
