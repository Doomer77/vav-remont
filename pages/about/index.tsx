import React, { FC } from 'react'
import Heading from '../../entities/heading/Heading'
import Navbar from '../../entities/navbar/Navbar'

const About: FC = () => {
    return (
        <div>
            <Navbar />
            <Heading text='About' />
            <div>About</div>
        </div>
    )
}

export default About
