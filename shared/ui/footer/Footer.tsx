import React, { FC } from 'react'
import Heading from '../heading/Heading'
import Socials from '../../../entities/socials/Socials'
import { socials } from '../../../pages/api/data/socials'
import { format } from 'date-fns'
import styles from '../../../styles/Footer.module.scss'

interface FooterTypes {
    visible: boolean
}

export const getStaticProps = async () => {
    try {
        const response = await fetch(`${process.env.API_HOST}/socials`)
        const data = await response.json()

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: { socials: data },
        }
    } catch {
        return {
            props: { socials: null },
        }
    }
}

const Footer: FC<FooterTypes> = ({ visible }) => {
    if (visible) {
        return (
            <footer className={styles.footer}>
                <Socials socials={socials} />
                <p className={styles.footer__text}>
                    {`Copyright © ${format(new Date(), 'yyyy')} Vav Remont`}
                </p>
            </footer>
        )
    }
    return null
}
export default Footer
