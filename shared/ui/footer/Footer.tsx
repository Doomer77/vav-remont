import React, { FC } from 'react'
import Socials from '../../../entities/socials/Socials'
import { socials } from '../../../pages/api/data/socials'
import { format } from 'date-fns'
import { FooterBox, FooterText } from './styles'

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
            <FooterBox>
                <Socials socials={socials} />
                <FooterText>
                    {`Copyright © ${format(new Date(), 'yyyy')} Vav Remont`}
                </FooterText>
            </FooterBox>
        )
    }
    return null
}
export default Footer
