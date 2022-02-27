import React, { FC } from 'react'
import { routes } from './lib/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../logo/Logo'
import styles from '../../../styles/Navbar.module.scss'

const Navbar: FC = () => {
    const { pathname } = useRouter()
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.nav__links}>
                {routes.map(({ id, title, path }) => {
                    return (
                        <Link key={id} href={path}>
                            <a
                                className={
                                    pathname === path
                                        ? styles.active
                                        : styles.nav__link
                                }
                            >
                                {title}
                            </a>
                        </Link>
                    )
                })}
            </div>
            <div>
                <Link href='tel:+74951234567'>
                    <a className={styles.nav__link}>8(967)118-92-52</a>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar
