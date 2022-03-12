import React, { FC } from 'react'
import { FeaturesStyle, FeatureStyle, FeatureTextStyle } from './styles'
import Image from 'next/image'

interface FeatureProps {
    id: number
    title: string
    src: string
    alt: string
}

interface FeatureItemProps {
    features: FeatureProps[]
}

const Features: FC<FeatureItemProps> = ({ features }) => {
    return (
        <div className={FeaturesStyle}>
            {features.map((item: FeatureProps) => {
                return (
                    <div key={item.id} className={FeatureStyle}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={100}
                            height={100}
                        />
                        <p className={FeatureTextStyle}>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Features
