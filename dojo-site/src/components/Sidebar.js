import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Avatar from './Avatar'

// styles
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'


export default function Sidebar() {
  const { user } = useAuthContext()
  return (
    <>
    { user &&
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL}/>
          <p>Hey {user.displayName}</p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard icon"></img>
                <span>Dashboard</span>
              </NavLink>
            </li> 
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon"></img>
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>}
    </>
  )
}
