import React, { FC } from 'react'
import Navigation from '../../features/navigation/Navigation'
import Phone from '../../entities/phone/Phone'
import Logo from '../logo/Logo'
import { HeaderNavbar } from './styles'

const Navbar: FC = () => {
    return (
        <HeaderNavbar>
            <Logo />
            <Navigation />
            <Phone />
        </HeaderNavbar>
    )
}
export default Navbar
