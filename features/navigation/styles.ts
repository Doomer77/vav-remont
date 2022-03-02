import styled from '@emotion/styled'
import { css } from '@emotion/css'

export const Nav = styled.nav`
    display: flex;
`
export const NavLink = css`
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    text-decoration: none;
    color: #fc982c;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;
    &:not(:last-child) {
        margin-right: 2rem;
    }
    @media (max-width: 64em) {
        font-size: 1.6rem;
    }
    &:hover {
        border-bottom: 2px solid #fc982c;
        transition: all 0.2s;
        @media (max-width: 64em) {
            font-size: 1.6rem;
        }
    }
`

export const NavLinkActive = css`
    &:not(:last-child) {
        margin-right: 2rem;
    }
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    text-decoration: none;
    color: #fc982c;
    transition: all 0.3s;
    border-bottom: 2px solid #fc982c;
    transition: all 0.2s;
    @media (max-width: 64em) {
        font-size: 1.6rem;
    }
`
