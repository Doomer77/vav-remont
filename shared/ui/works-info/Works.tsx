import React, { FC } from 'react'
import { WorksInfoBlock } from './styles'
import Heading from '../../../entities/heading/Heading'
import Work from '../../../features/work/Work'
import { works } from 'features/work/lib/works'

const WorksInfo: FC = () => {
    return (
        <WorksInfoBlock>
            <Heading text='Наши работы:' color='white' />
            <Work works={works} />
        </WorksInfoBlock>
    )
}

export default WorksInfo
