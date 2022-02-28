import React, { FC } from 'react'
import { LayoutTypes } from './types'

const Layout: FC<LayoutTypes> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout
