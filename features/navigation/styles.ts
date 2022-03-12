import styled from '@emotion/styled'
import { css } from '@emotion/css'

export const Nav = styled.nav`
    display: flex;
`
export const NavLink = css`
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fc982c;
    transition: all 0.3s;
    border-bottom: 1px solid transparent;
    &:not(:last-child) {
        margin-right: 3.5rem;
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

export const NavLinkActive = css`
    &:not(:last-child) {
        margin-right: 3.5rem;
    }
    display: block;
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fc982c;
    transition: all 0.3s;
    border-bottom: 1px solid #fc982c;
    transition: all 0.2s;
    @media (max-width: 64em) {
        font-size: 1.6rem;
    }
`
