import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles
import './Navbar.css'
// components
import Searchbar from './Searchbar';



export default function Navbar() {
  const { color } = useTheme()
  return (
    <div className="navbar" style={{ background: color }}>
        <nav>
            <NavLink to="/" className="brand">
                <h1>Cooking Ninja</h1>
            </NavLink>
            <Searchbar/>
            <NavLink to="/create">
                <h1>Create Recipe</h1>
            </NavLink>
            
        </nav>
    </div>
  )
}
