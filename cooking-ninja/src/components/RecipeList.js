
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'
// styles
import { Link } from 'react-router-dom'

import NoMeals from '../assets/noMeals.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ recipes }) {
  const { mode } = useTheme()
  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>
  }
  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
        <div className={`card ${mode}`} key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0,100)}...</div>
            <Link to={`recipes/${recipe.id}`}>Cook this</Link>
            <img
            className='delete'
            src={NoMeals}
            onClick={() => handleClick(recipe.id)}
            />
        </div>

    ))}
    </div>
    
  )
}
