import { css } from '@emotion/css'

export const WorkssStyle = css`
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 80%;
`

export const WorkStyle = css`
    display: flex;
    justify-content: center;
`

export const WorkImageStyle = css`
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.2);
    }
`
