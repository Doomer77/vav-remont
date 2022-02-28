import React, { FC } from 'react'
import HeaderContent from '../../../features/header-content/HeaderContent'
import styles from '../../../styles/Header.module.scss'
import Footer from '../footer/Footer'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <HeaderContent />
            <Footer visible={false} />
        </header>
    )
}
export default Header
