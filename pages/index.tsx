import React, { FC } from 'react'
import { SociaslTypes } from '../entities/socials/types'
import Header from '../shared/ui/header/Header'

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

const Home: FC<SociaslTypes> = () => (
    <div>
        <Header />
    </div>
)

export default Home
