import './App.css';
import { useState } from 'react';
import Title from './components/Title'
function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "megumin party", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
  ])

  const handleClick = (id) => {  
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
    console.log(id)
  }
  
  return (
    <div className="App">
      <Title />
      <div>
        <button onClick={() => setShowEvents(!showEvents)}>{!showEvents ? "show" : "hide"} events</button>
      </div>
          {showEvents && events.map((event, index) => (
            <div key={event.id}>
              <h2>{index} - {event.title}</h2>
              <button onClick={() => handleClick(event.id) }>delete event</button>
            </div>
          ))}
    </div>
  );
}

export default App;
