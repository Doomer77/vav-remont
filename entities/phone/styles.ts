import styled from '@emotion/styled'

export const PhoneLink = styled.a`
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fc982c;
    transition: all 0.3s;
    border-bottom: 1px solid transparent;
    &:not(:last-child) {
        margin-right: 2rem;
    }
    @media (max-width: 64em) {
        font-size: 1.6rem;
    }
    &:hover {
        border-bottom: 1px solid #fc982c;
        transition: all 0.2s;
        @media (max-width: 64em) {
            font-size: 1.6rem;
        }
    }
`
