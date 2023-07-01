import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        {!user && (
          <>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
          </>
        )}
        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
