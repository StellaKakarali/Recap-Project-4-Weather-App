import "./App.css";
import ActivityForm from "./ActivityForm";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
    console.log("ich bin eine Aktivität: ", newActivity);
  }
  return (
    <main>
      <ActivityForm onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
