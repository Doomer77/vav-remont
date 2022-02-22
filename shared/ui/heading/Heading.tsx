import React, {FC} from "react";
import {IHeading} from './types'

const Heading: FC<IHeading> = ({tag, text}) => {
    const Tag: React.ComponentType | string = tag || 'h1'
    return <Tag>{text}</Tag>
}

export default Heading