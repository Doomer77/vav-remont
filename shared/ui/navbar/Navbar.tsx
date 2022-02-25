import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const navigation: { id: number; title: string; path: string }[] = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
]

const Navbar: FC = () => {
    const { pathname } = useRouter()
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    src='/logo.png'
                    width={100}
                    height={80}
                    alt='Vav remont'
                />
            </div>
            <div className={styles.links}>
                {navigation.map(({ id, title, path }) => {
                    return (
                        <Link key={id} href={path}>
                            <a
                                className={
                                    pathname === path
                                        ? styles.active
                                        : undefined
                                }
                            >
                                {title}
                            </a>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
export default Navbar
