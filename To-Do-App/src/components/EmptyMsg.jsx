import React from 'react'
import styles from './EmptyMsg.module.css'
function EmptyMsg(empty) {
  return (
    <div className={styles.msg}>No tasks today. Enjoy your day!!</div>
  )
}

export default EmptyMsg