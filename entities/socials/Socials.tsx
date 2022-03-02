import React, { FC } from 'react'
import { SocialsTypes } from './types'

import { SocialsList, SocialsListItem } from './styles'

const Socials: FC<SocialsTypes> = ({ socials }) => {
    if (!socials) {
        return null
    }

    return (
        <SocialsList>
            {socials &&
                socials.map((item) => (
                    <SocialsListItem key={item.id}>
                        <a
                            href={item.path}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i
                                className={`fab fa-${item.icon}`}
                                aria-hidden='true'
                            />
                        </a>
                    </SocialsListItem>
                ))}
        </SocialsList>
    )
}

export default Socials
