import React, { FC } from 'react'
import {
    Content,
    ContentMainText,
    ContentSubText,
    ContentButton,
} from './styles'

import Heading from 'entities/heading/Heading'

export const HeaderContent: FC = () => {
    return (
        <Content>
            <Heading color='white' text='Дизайн и отделка' />
            <ContentMainText>Ремонт любой сложности</ContentMainText>
            <ContentSubText>
                От простого косметического до сложнейшего по индивидуальному
                дизайн проекту
            </ContentSubText>
            <ContentButton>Заказать ремонт</ContentButton>
        </Content>
    )
}
