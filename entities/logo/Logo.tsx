import React, { FC } from 'react'
import { LogoLink } from './styles'
import Image from 'next/image'

const Logo: FC = () => {
    return (
        <LogoLink href='/'>
            <Image src='/logo.svg' width={107} height={74} alt='Vav remont' />
        </LogoLink>
    )
}
export default Logo
