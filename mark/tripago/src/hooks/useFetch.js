import { useState, useEffect, useRef } from 'react'

// If you try to pass an object and utilize it in the dependency array, you must either:
// 1. use useRef to wrap an object/array argument, which is a useEffect dependency
export const useFetch = (url, _options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  // use useRef to wrap an object/array argument, which is a useEffect dependency
  const options = useRef(_options).current
// useCallback prevents the function from triggering useEffect, similar to useState
// Have to put url in there because it won't fire an update unless the url is in the array
// You have to use useCallback if a function is outside of useEffect and is in the dependency array
// useEffect can't use async on itself but can have functions that utilize it.
  useEffect(() => {
    console.log(options)
    // AbortController is used as cleanup to remove memory leaks but seemingly React 18 does it by itself now
    // const controller = new AbortController()
    const fetchData = async () => {
      setIsPending(true)

      try {
        // put this in the fetch argument if using cleanup functions: { signal: controller.signal}
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const json = await res.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        // if (err.name === "AbortErr") {
        //     console.log('the fetch was aborted')
        // } else {
            
        // }
        setIsPending(false)
        setError('Could not fetch the data')
      }
    //   return () => {
    //     controller.abort()
    //   }
    }

    fetchData()
  }, [url])

  // A hook should return an array or object of properties
  return { data, isPending, error}
}

// Old way of doing inside a singular file
// const fetchData = useCallback(async () => {
//     const response = await fetch(url)
//     const json = await response.json()
//     setTrips(json)
//   }, [url])

//   useEffect(() => {
//       fetchData()
//   }, [fetchData])


