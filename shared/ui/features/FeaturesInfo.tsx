import React, {FC} from 'react'
import { FeaturesBox, FeaturesBcg } from './styles'
import Heading from '../../../entities/heading/Heading'


const FeaturesInfo: FC = () => {
    return (
        <FeaturesBox>
            <FeaturesBcg />
            <Heading text='Мы выполняем:' color='black'/>
        </FeaturesBox>
    )
}

export default FeaturesInfo
