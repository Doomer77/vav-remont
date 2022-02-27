import React, { FC } from 'react'
import { routes } from '../lib/routes'
import { useRouter } from 'next/router'
import styles from './Navigation.module.scss'
import Link from 'next/link'

const Navigation: FC = () => {
    const { pathname } = useRouter()
    return (
        <nav className={styles.nav}>
            {routes.map(({ id, title, path }) => {
                return (
                    <Link key={id} href={path}>
                        <a
                            className={
                                pathname === path
                                    ? styles.nav__link_active
                                    : styles.nav__link
                            }
                        >
                            {title}
                        </a>
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navigation
