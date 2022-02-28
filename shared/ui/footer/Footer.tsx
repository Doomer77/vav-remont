import React, { FC } from 'react'
import Heading from '../heading/Heading'

interface FooterTypes {
    visible: boolean
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
