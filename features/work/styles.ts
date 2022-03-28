import { css } from '@emotion/css'

export const WorkssStyle = css`
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 40rem);
    grid-template-columns: repeat(3, 30rem);
    justify-content: center;
    gap: 5rem;
    width: 80%;
`

export const WorkStyle = css`
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const WorkImageStyle = css`
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.2);
    }
`
export const WorkImageModelStyle = css`
    width: auto;
    max-width: 50%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 2rem 0 2rem;
    margin: 0 auto;
`
export const CloseIconStyle = css`
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    cursor: pointer;
`
export const ModelStyle = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity 0.4s ease, visibility 0.4s ease,
        transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
`
export const ModelOpenStyle = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity 0.4s ease, visibility 0.4s ease,
        transform 0.5s ease-in-out;
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    overflow: hidden;
    z-index: 999;
`
