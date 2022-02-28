import React, { FC } from 'react'
import { HeaderContent } from '../../../features/header-content'
import styles from '../../../styles/Header.module.scss'
import Navbar from '../navbar/Navbar'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <HeaderContent />
        </header>
    )
}
export default Header
