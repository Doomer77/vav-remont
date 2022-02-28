import React, { FC } from 'react'
import Navigation from '../../../features/navigation/Navigation'
import Phone from '../../../entities/phone/Phone'
import Logo from '../logo/Logo'
import styles from '../../../styles/Header.module.scss'

const Navbar: FC = () => {
    return (
        <div className={styles.header__navbar}>
            <Logo />
            <Navigation />
            <Phone />
        </div>
    )
}
export default Navbar
