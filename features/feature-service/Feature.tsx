import React, { FC } from 'react'
import Image from 'next/image'
import { FeaturesStyle, FeatureStyle, FeatureTextStyle } from './styles'
import { FeatureItemProps } from './types'

const Feature: FC<FeatureItemProps> = ({ features }) => {
    return (
        <div className={FeaturesStyle}>
            {features.map((item) => {
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

export default Feature
