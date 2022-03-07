import React, { FC } from 'react'
import { HeaderContent } from '../../../features/header-content'
import Navbar from '../../../entities/navbar/Navbar'
import Head from 'next/head'
import { HeaderBox } from './styles'

const Header: FC = () => {
    return (
        <>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css'
                />
            </Head>
            <HeaderBox>
                <Navbar />
                <HeaderContent />
            </HeaderBox>
        </>
    )
}
export default Header
