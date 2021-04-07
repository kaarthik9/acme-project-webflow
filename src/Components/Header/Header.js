import React from 'react'
import HeaderAnnounce from './HeaderAnnounce/HeaderAnnounce'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <HeaderAnnounce />
      <HeaderMenu />
    </div>
  )
}
