import React, {FC} from 'react'
import { FeaturesStyle, FeatureStyle, FeatureImgStyle, FeatureTextStyle } from './styles'

interface FeatureProps {
    id: number
    title: string
    src: string,
    alt: string
}

interface FeatureItemProps {
    features: FeatureProps[]
}

const Features: FC<FeatureItemProps> = ({features}) => {

    return (
        <div className={FeaturesStyle}>
            {features.map((item: FeatureProps) => {

                return (
                    <div key={item.id} className={FeatureStyle}>
                        <img src={item.src} alt={item.alt} className={FeatureImgStyle}/>
                        <p className={FeatureTextStyle}>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default Features
