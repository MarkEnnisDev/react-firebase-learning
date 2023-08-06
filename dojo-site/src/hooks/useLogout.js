import { useEffect, useState } from "react"
import { projectAuth, projectFirestore } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch, user } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign the user out
    try {
      // update online status
      const { uid } = user
      await projectFirestore.collection('users').doc(uid).update({ online: false })
      
      await projectAuth.signOut()
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
        setIsPending(false)
        setError(null)
      

    } catch (err) {
        console.log(err)
        setError(err.message)
        setIsPending(false)
    }
    
  }
  return { logout, error, isPending }
}