import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Link href='/accueil'>
            Accueil
        </Link>
        <Link href='/ISR'>
            ISR
        </Link>
        <Link href='/blog/article'>
            Article
        </Link>
        <Link href='/listes'>
            Listes
        </Link>
        <Link href='/bitcoin'>
            Bitcoin
        </Link>
        <Link href='/add'>
            Post API
        </Link>
    </nav>
  )
}
