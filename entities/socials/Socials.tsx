import Head from 'next/head'
import styles from './Socials.module.scss'
import React, { FC } from 'react'
import { SocialsTypes } from './types'

const Socials: FC<SocialsTypes> = ({ socials }) => {
    if (!socials) {
        return null
    }

    return (
        <ul className={styles.socials}>
            {socials &&
                socials.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.path}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i
                                className={`fab fa-${item.icon}`}
                                aria-hidden='true'
                            />
                        </a>
                    </li>
                ))}
        </ul>
    )
}

export default Socials
