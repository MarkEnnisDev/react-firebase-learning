import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

import styles from './Home.module.css'
// components 
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Home() {
  const { user } = useAuthContext()
  let { changeOrderBy, documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', "desc"]
  )
  const changeSort = (sort) => {
    changeOrderBy(sort)
  }
  return (
    <div className={styles.container}>
      
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {documents && <TransactionList transactions={documents}/>}
        </div>

        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid}/>
          <div className={styles.dropdown}>
            <label>
              <span></span>
              <select defaultValue="createdAt" onChange={(e) => changeSort(e.target.value)}>
                <option value="name">Name</option>
                <option value="amount">Amount</option>
                <option value="createdAt">Time</option>
              </select>
             
            </label>
            {/* <label>
              <span></span>
              <select defaultValue="desc" onChange={}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
             
            </label> */}
          </div>
        </div>
    </div>
  )
}
