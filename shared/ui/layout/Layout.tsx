import Header from '../header/Header'
import Footer from '../footer/Footer'
import React, { FC } from 'react'
import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
export default Layout
