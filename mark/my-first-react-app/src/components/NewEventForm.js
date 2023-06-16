import { useState, useRef } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const resetForm = () => {
      setTitle('')
      setDate('')
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const event = {
        title: title,
        date: date,
        id: Math.floor(Math.random() * 10000)
      }
      resetForm()
      addEvent(event)
      console.log(event)
    }
    return (
        <form class="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                id="title" />
            </label>
            
            
            
            <label>
                <span>Event Date:</span>
                <input 
                type="date" 
                onChange={(e) => setDate(e.target.value)} 
                value={date} id="date" />
            </label>
            <button>Submit</button>
            <p onClick={resetForm}>I wanna onclick the p</p>
        </form>
    )
}