import "./ActivityForm.css";

export default function ActivityForm({ onAddActivity }) {
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
        <h2> Add New Activity </h2>
        <section className="beside">
          <label htmlFor="activity">Name: </label>
          <input
            id="activity"
            type="text"
            name="activity"
            placeholder="Walking"
          />
        </section>
        <section className="beside">
          <label htmlFor="weather">Good-weather: </label>
          <input id="weather" type="checkbox" name="weatherActivity" />
        </section>
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
