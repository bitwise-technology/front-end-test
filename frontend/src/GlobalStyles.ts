import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color : #382039;
        --secondary-color : #5A3D5C;
        --secondary-one : #FD71EA;
        --dark : #200F21;
        -purple : #A51C92;
        --white: #F0F0F0;
        

    }

    *::after,
    *::before,
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;