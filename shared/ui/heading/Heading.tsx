import React, { FC } from 'react'
import { HeadingTypes } from './types'

const Heading: FC<HeadingTypes> = ({ tag, text }) => {
    const Tag: React.ComponentType | string = tag || 'h1'
    return <Tag>{text}</Tag>
}

export default Heading
