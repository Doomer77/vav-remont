import React, {FC} from 'react'
import { FeaturesBox } from './styles'
import Heading from '../../../entities/heading/Heading'
import Features from '../../../features/feature-service/Feature'
import { features } from '../../../features/feature-service/lib/features'

const FeaturesInfo: FC = () => {
    return (
        <FeaturesBox>
            <Heading text='Мы выполняем:' color='black'/>
            <Features features={features} />
        </FeaturesBox>
    )
}

export default FeaturesInfo
