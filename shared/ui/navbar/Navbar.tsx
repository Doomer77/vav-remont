import React, { FC } from 'react'
import Navigation from '../../../features/navigation/Navigation'
import Phone from '../../../entities/phone/Phone'
import Logo from '../logo/Logo'
import styles from './Navbar.module.scss'

const Navbar: FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <Phone />
        </header>
    )
}
export default Navbar
