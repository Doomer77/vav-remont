import styled from '@emotion/styled'
type colorType = {
   color: string
}

export const ContentHeading = styled.h1<colorType>`
    margin-bottom: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.2rem;
    color: ${(props) => props.color};
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    text-align: center;
    position: relative;
    @media (max-width: 56.25em) {
        font-size: 2.5rem;
    }
`
