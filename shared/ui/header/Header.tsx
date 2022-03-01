import React, { FC } from 'react'
import { HeaderContent } from '../../../features/header-content'
import styles from '../../../styles/Header.module.scss'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Head from 'next/head'

const Header: FC = () => {
    return (
        <>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css'
                />
            </Head>
            <header className={styles.header}>
                <Navbar />
                <HeaderContent />
                <Footer visible={true} />
            </header>
        </>
    )
}
export default Header
