import './App.css';
import React, { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';
function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "megumin party", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
  ])
  const subtitle = "Hello I'm a subtitle"
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
      
      <Title title="NET NINJA EVENTS" subtitle={subtitle}/>
      <Title title="THIS IS A TITEL" subtitle="nooo"/>
      <div>
        <button onClick={() => setShowEvents(!showEvents)}>{!showEvents ? "show" : "hide"} events</button>
      </div>
          {showEvents && events.map((event, index) => (
            <React.Fragment key={event.id}>
              <h2>{index} - {event.title}</h2>
              <button onClick={() => handleClick(event.id) }>delete event</button>
            </React.Fragment>
          ))}
          <Modal />
    </div>
  );
}

export default App;
