import React, { FC } from 'react'
import Navbar from '../navbar/Navbar'
import { css } from '@emotion/css'

const Header: FC = () => {
    return (
        <header
            className={css`
                padding: 20px;
                background: #ffe491;
            `}
        >
            <Navbar />
        </header>
    )
}
export default Header
