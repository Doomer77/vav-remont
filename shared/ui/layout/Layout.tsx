import Header from '../header/Header'
import Footer from '../footer/Footer'
import React, { FC } from 'react'
import { LayoutTypes } from './types'

const Layout: FC<LayoutTypes> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout
