import React, { FC } from 'react'
import { HeadingTypes } from './types'
import { ContentHeading } from './styles'

const Heading: FC<HeadingTypes> = ({ text, color }) => {
    return <ContentHeading color={color}>{text}</ContentHeading>
}

export default Heading
