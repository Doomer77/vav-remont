import styled from '@emotion/styled'

export const FeaturesBox = styled.section`
    width: 100%;
    height: 95vh;
    padding: 7rem 0;
    background-image: linear-gradient(rgba(85, 146, 163, 0.1), rgba(227, 149, 68, 0.4));
    background-size: cover;
    background-position: top;
    position: relative;
`

export const FeaturesBcg = styled.div`
    width: 100%;
    height: 95vh;
    background-image: url('bg-views.jpg');
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: polygon(0 9%, 100% 0, 100% 91%, 0% 100%);
    clip-path: polygon(0 9%, 100% 0, 100% 91%, 0% 100%);
`
