import React, { FC, useState } from 'react'
import { WorksItemProps } from './types'
import CloseIcon from '@mui/icons-material/Close'
import {
    WorkssStyle,
    WorkStyle,
    WorkImageStyle,
    WorkImageModelStyle,
    CloseIconStyle,
    ModelStyle,
    ModelOpenStyle,
} from './styles'

const Work: FC<WorksItemProps> = ({ works }) => {
    const [model, setModel] = useState<boolean>(false)
    const [tempImgSrc, setTempImgSrc] = useState<string>('')

    const getImg = (src: string) => {
        setTempImgSrc(src)
        setModel(true)
    }

    return (
        <div>
            <div className={model ? ModelOpenStyle : ModelStyle}>
                <img src={tempImgSrc} alt='' className={WorkImageModelStyle} />
                <CloseIcon
                    onClick={() => setModel(false)}
                    className={CloseIconStyle}
                />
            </div>
            <div className={WorkssStyle}>
                {works.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={WorkStyle}
                            onClick={() => getImg(item.src)}
                        >
                            <img
                                className={WorkImageStyle}
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work
