import React, { FC } from 'react'
import { WorksItemProps } from './types'
import Image from 'next/image'
import { WorkssStyle, WorkStyle, WorkImageStyle } from './styles'

const Work: FC<WorksItemProps> = ({ works }) => {
    const onFancyBox = (id: number) => {
        console.log(id)
    }

    return (
        <div className={WorkssStyle}>
            {works.map((item) => {
                return (
                    <div key={item.id} className={WorkStyle}>
                        <Image
                            className={WorkImageStyle}
                            src={item.src}
                            alt={item.alt}
                            width={300}
                            height={400}
                            onClick={() => onFancyBox(item.id)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Work
