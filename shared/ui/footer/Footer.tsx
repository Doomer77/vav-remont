import React, { FC } from 'react'
import Heading from '../heading/Heading'

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
            <footer>
                <Heading tag='h3' text='Created by P.J.' />
            </footer>
        )
    }
    return null
}
export default Footer
