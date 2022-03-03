import React, { FC } from 'react'
import {
    Content,
    ContentHeading,
    ContentMainText,
    ContentSubText,
    ContentButton,
} from './styles'

export const HeaderContent: FC = () => {
    return (
        <Content>
            <ContentHeading>Дизайн и отделка</ContentHeading>
            <ContentMainText>Ремонт любой сложности</ContentMainText>
            <ContentSubText>
                От простого косметического до сложнейшего по индивидуальному
                дизайн проекту
            </ContentSubText>
            <ContentButton>Заказать ремонт</ContentButton>
        </Content>
    )
}
