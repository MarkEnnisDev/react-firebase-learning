import { useReducer, useEffect, useState } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true, error: null}
    case "IS_PENDING":
      return {  isPending: true, document: null, success: false, error: null}
    case 'ERROR':
      return {   isPending: false, document: null, success: false, error: action.payload}
    default:
      throw new Error(`action type of ${action.type} not found`)
  }
}
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING"})
    console.log('adddocument')
    try {
      console.log('hello')
      const createdAt = timestamp.fromDate(new Date())
      console.log(createdAt)
      const addedDocument = await ref.add({...doc, createdAt })
      console.log("🚀 ~ file: useFirestore.js:35 ~ addDocument ~ addedDocument:", addedDocument)

      dispatch({ type: 'ADDED_DOCUMENT', payload: addedDocument })
      
    } 
    catch(err) {
      dispatch({type: 'ERROR', payload: err.message})
    }
  }
  // delete a document
  const deleteDocument = async (id) => {
    
  }
  return { addDocument, deleteDocument, response}
}