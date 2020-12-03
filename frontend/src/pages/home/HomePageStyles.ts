import styled from 'styled-components';



export const PageContainer = styled.div`
    padding-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    max-height: 100vh; 
    background: linear-gradient(359.39deg, #EFEEEE 0.46%, #FFFFFF 99.42%);
`;

export const StyledBackgroundImage = styled.img`
    position: absolute;
    right: 0;
    top: 0;
`;

export const StyledPeopleWorkingImage = styled.img`
    position: absolute;
    right: 154px;
    top: 164px;
    z-index: 1;
`;
