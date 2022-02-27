import Header from '../header/Header'
import Footer from '../footer/Footer'
import React, { FC } from 'react'
import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout
