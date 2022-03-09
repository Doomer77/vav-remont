import React, { FC } from 'react'
import { LogoLink, LogoImg } from './styles'

const Logo: FC = () => {
    return (
        <LogoLink href='/'>
            <img src='/logo.svg' alt='Vav remont' className={LogoImg} />
        </LogoLink>
    )
}
export default Logo
