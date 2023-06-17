import { useEffect, useState, useCallback } from "react"
// styles
import './TripList.css'
import { useFetch } from "../hooks/useFetch"

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips, isPending, error } = useFetch(url, {type: 'GET'})

  return (
    <div className="trip-list">
        <h2>TripList</h2>
        {isPending && <div>Loading trips...</div>}
        {error && <div>{error}</div>}
        <ul>
            {/* Conditional rendering is required to ensure that data is fully loaded before trying to use
            the map property on the data object */}
            {trips && trips.map(trip => (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            ))}
        </ul>
        
        <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                European Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>
                All Trips
            </button> 
        </div>
    </div>
  )
}

