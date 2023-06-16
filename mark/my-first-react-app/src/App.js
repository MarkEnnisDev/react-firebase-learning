import './App.css';
import React, { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm'
function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "megumin party", id: 1},
  ])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const subtitle = "Hello I'm a subtitle"
  const handleClick = (id) => {  
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
    console.log(id)
  }
  
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className="App">
      
      <Title title="NET NINJA EVENTS" subtitle={subtitle}/>
      <Title title="THIS IS A TITEL" subtitle="nooo"/>
      <div>
        <button onClick={() => setShowEvents(!showEvents)}>{!showEvents ? "show" : "hide"} events</button>
      </div>
          {showEvents && <EventList events={events} handleClick={handleClick}/>}
          <div>
            <button onClick={() => setShowModal(true)}>Add New Event</button>
          </div>
          {showModal && <Modal handleClose={handleClose} isSalesModal={true}> 
            <NewEventForm addEvent={addEvent}/>
          </Modal> }
    </div>
  );
}

export default App;
