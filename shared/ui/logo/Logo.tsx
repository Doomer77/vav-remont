import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'

const Logo: FC = () => {
    return (
        <Link href='/'>
            <a href='/'>
                <Image
                    src='/logo.svg'
                    width={115}
                    height={74}
                    alt='Vav remont'
                    className={styles.logo}
                />
            </a>
        </Link>
    )
}
export default Logo
