import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color : #382039;
        --secondary-color : #5A3D5C;
        --secondary-one : #FD71EA;
        --dark : #200F21;
        --purple : #A51C92;
        --purple-light: #F638DC;
        --white: #F0F0F0;
        
        --blackColor : #000;

        --strippedRowColor : #fafafc;
        --dataColor : #3d5879;
        --headerColor: #657fa0;

        --footerTextColor :#fd71ea;

        --scrollBarThumbColor : #ADB6C0;

        --wineColor : #5A3D5C;
    }

    body {
        font-family: 'Roboto';
    }

    *::after,
    *::before,
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;