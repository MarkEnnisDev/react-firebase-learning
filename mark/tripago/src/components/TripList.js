import { useEffect, useState, useCallback } from "react"
import { useFetch } from "../hooks/useFetch"
// styles
import './TripList.css'

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')

    // useCallback prevents the function from triggering useEffect, similar to useState
    // Have to put url in there because it won't fire an update unless the url is in the array
    // You have to use useCallback if a function is outside of useEffect and is in the dependency array
    // useEffect can't use async on itself but can have functions that utilize it.
    const fetchTrips = useCallback(async () => {
      const response = await fetch(url)
      const json = await response.json()
      setTrips(json)
    }, [url])

    useEffect(() => {
        fetchTrips()
    }, [fetchTrips])

    console.log(trips)
  return (
    <div className="trip-list">
        <h2>TripList</h2>
        <ul>
            {trips.map(trip => (
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

