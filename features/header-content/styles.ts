import styled from '@emotion/styled'

export const Content = styled.div`
    height: calc(100vh - 105px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContentMainText = styled.p`
    margin-bottom: 2.5rem;
    font-family: 'Rubik', sans-serif;
    font-size: 4.5rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    text-align: center;
    @media (max-width: 56.25em) {
        font-size: 3.5rem;
    }
`

export const ContentSubText = styled.p`
    margin-bottom: 5rem;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    @media (max-width: 56.25em) {
        font-size: 2rem;
    }
`

export const ContentButton = styled.p`
    padding: 1.7rem 1.9rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    background: rgba(93, 71, 59, 0.7);
    color: #fff;
    border: 2px solid #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: translateY(-0.5rem);
        -webkit-box-shadow: 0px 5px 29px 2px rgba(34, 60, 80, 0.5);
        -moz-box-shadow: 0px 5px 29px 2px rgba(34, 60, 80, 0.5);
        box-shadow: 0px 5px 29px 2px rgba(34, 60, 80, 0.5);
    }
    &:active {
        transform: translateX(0);
        box-shadow: none;
    }
`
