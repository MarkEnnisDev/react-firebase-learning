import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [sort, setSort] = useState("createdAt")
  const [error, setError] = useState(null)
  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  let orderBy = useRef(_orderBy).current

  const changeOrderBy = (sort) => {
    setSort(sort)
    orderBy[0] = sort
    
  }
  useEffect(() => {
    
    let ref = projectFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      console.log(`${orderBy} in useCollection.js`)
      ref = ref.orderBy(...orderBy)
    }

    const unsub = ref.onSnapshot((snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })

      // update state
      setDocuments(results)
      setError(null)
      }, (error) => {
        console.log(error)
        setError('could not fetch rezources')
      })

      return () => unsub()
  }, [collection, query, orderBy, sort])
  return { documents, error, changeOrderBy }
}