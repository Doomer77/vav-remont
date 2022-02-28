import React, { FC } from 'react'
import { LayoutTypes } from './types'
import Navbar from '../navbar/Navbar'

const Layout: FC<LayoutTypes> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default Layout
