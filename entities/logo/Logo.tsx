import React, { FC } from 'react'
import Image from 'next/image'
import { LogoLink } from './styles'

const Logo: FC = () => {
    return (
        <LogoLink href='/'>
            <Image src='/logo.svg' width={115} height={74} alt='Vav remont' />
        </LogoLink>
    )
}
export default Logo
