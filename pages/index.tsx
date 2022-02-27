import React, { FC } from 'react'
import Heading from '../shared/ui/heading/Heading'
import { SociaslTypes } from '../entities/socials/types'
import styles from '../styles/Home.module.scss'
import Socials from '../entities/socials/Socials'

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

const Home: FC<SociaslTypes> = ({ socials }) => (
    <div className={styles.wrapper}>
        <Heading text='Home' />
        <Socials socials={socials} />
    </div>
)

export default Home
