// styles

import './Recipe.css'

import { useFetcher, useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get()
    .then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find that recipe')
      }
    })
  }, [id])
  return (
    <div className={`recipe ${mode}`}>

      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading recipe...</p>}
      {recipe &&
        (<>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          
          <p className='method'>{recipe.method}</p>
        </>)}
      
    </div>
  )
}