import styled from '@emotion/styled'

export const SocialsList = styled.ul`
    margin-bottom: 1rem;
    display: flex;
    padding: 0;
    list-style-type: none;
    i {
        color: #fff;
        font-size: 4rem;
        transition: all 0.5s;
    }
    i:hover {
        transform: scale(1.2) rotate(360deg);
    }
`
export const SocialsListItem = styled.li`
    &:not(:last-child) {
        margin-right: 2rem;
    }
`
