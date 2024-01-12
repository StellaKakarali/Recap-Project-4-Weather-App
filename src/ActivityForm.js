import { useState } from "react";
import "./ActivityForm.css";

export default function ActivityForm({ onAddActivity }) {
  //console.log(onAddActivity);
  function handleSubmit(event) {
    event.preventDefault();

    const newActivity = {
      name: event.target.elements.activity.value,
      isForGoodWeather: event.target.elements.weatherActivity.checked,
    };

    onAddActivity(newActivity);
    console.log("ActivityForm: ", newActivity);

    event.target.reset();
    event.target.elements.activity.focus();
  }

  return (
    <div>
      <h1>Add new Activity</h1>
      <form onSubmit={handleSubmit}>
        <label> Activity Name</label>
        <input
          id="activity"
          type="text"
          name="activity"
          placeholder="Walking"
        />
        <label>Good weather</label>
        <input id="weather" type="checkbox" name="weatherActivity" />
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
