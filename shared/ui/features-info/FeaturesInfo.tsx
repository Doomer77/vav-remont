import React, { FC } from 'react'
import { FeaturesBox } from './styles'
import Heading from '../../../entities/heading/Heading'
import Feature from '../../../features/feature-service/Feature'
import { features } from '../../../features/feature-service/lib/features'

const FeaturesInfo: FC = () => {
    return (
        <FeaturesBox>
            <Heading text='Мы выполняем:' color='black' />
            <Feature features={features} />
        </FeaturesBox>
    )
}

export default FeaturesInfo
