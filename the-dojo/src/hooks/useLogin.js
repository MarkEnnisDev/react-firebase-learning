import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    // login the user
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      
      if (!res) {
        throw new Error('Could not login')
      }
      // dispatch logout action
      dispatch({ type: 'LOGIN', payload: res.user })

      // update state
        setIsPending(false)
        setError(null)
      

    } catch (err) {
        console.log(err)
        setError(err.message)
        setIsPending(false)

    }
    
  }
  return { login, error, isPending }
}