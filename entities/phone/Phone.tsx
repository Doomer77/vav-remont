import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Phone.module.scss'

const Phone: FC = () => {
    return (
        <Link href='tel:+79671189252'>
            <a className={styles.phone}>8(967)118-92-52</a>
        </Link>
    )
}

export default Phone
