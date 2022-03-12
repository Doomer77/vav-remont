import React, {FC} from 'react'
import { WorksInfoBlock } from './styles'
import Works from '../../../pages/works'
import Heading from '../../../entities/heading/Heading'

const WorksInfo: FC = () => {
    return (
        <WorksInfoBlock>
            <Heading text='Наши работы:' color='white'/>
            <Works />
        </WorksInfoBlock>
    )
}

export default WorksInfo
