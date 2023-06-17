import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)

// useCallback prevents the function from triggering useEffect, similar to useState
// Have to put url in there because it won't fire an update unless the url is in the array
// You have to use useCallback if a function is outside of useEffect and is in the dependency array
// useEffect can't use async on itself but can have functions that utilize it.
// Look back at TripList is 
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()

      setData(json)
    }

    fetchData()
  }, [url])

  // A hook should return an array or object of properties
  return { data }
}

export default useFetch