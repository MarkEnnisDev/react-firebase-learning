import { NavLink } from 'react-router-dom';
// styles
import './Navbar.css'
// components
import Searchbar from './Searchbar';
export default function Navbar() {
  return (
    <div className="navbar">
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
