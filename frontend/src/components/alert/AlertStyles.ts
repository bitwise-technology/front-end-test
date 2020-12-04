import styled from 'styled-components';

export const AlertContainer = styled.div`
    position: absolute;
    right: 0;
    z-index: 2;
    top: 50px;
    width: 786px;
    height: 198px;
    background-image: linear-gradient(90deg, #A51C92 0%, #F638DC 100%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 40px;

    color:#F0F0F0;

`;


export const AlertCloseButton = styled.span`
    position: absolute;
    top: 20px;
    right: 20px;

`;

export const AlertTitle = styled.h2`
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 504px;
    max-width: 504px;
`;

export const AlertFooter = styled.div`
    display: flex;
    max-width: 504px;
    align-items: center;
`;

export const AlertSubtitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    flex: 1;
`;

export const SocialMedia = styled.div`

    & > :first-child {
        margin-right: 10px;
    }

    & > * > path {
        fill: #fff !important;
    }

`;