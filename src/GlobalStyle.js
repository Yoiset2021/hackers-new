import { createGlobalStyle } from 'styled-components';

const GLobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    ul, li, h1, h2, h3, p, button{
        padding: 0;

    } 
    ul {
        list-style: none;
    }
    button {
        background: transparent;
        border: 0;
        outline: 0;
    }
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
        background-color: #fcfcfc;
        height: 100vh;

        width: 100%;
        overscroll-behavior: none;
    }
    #app {
        min-height: 100vh;
        overflow-x: hidden;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    body div::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    body div::-webkit-scrollbar:vertical {
        width: 6px;
    }
    body div::-webkit-scrollbar-button:increment {
        display: none;
    }
    body div::-webkit-scrollbar-button {
        display: none;
    }
    body div::-webkit-scrollbar:horizontal {
        height: 6px;
    }
    body div::-webkit-scrollbar-thumb {
        background-color: #9647ce;
        border-radius: 20px;
        border: 1px solid #fafafa;
    }
    body div::-webkit-scrollbar-track {
        border-radius: 6px;
    }

    @media screen and (max-width: 1000px) {
        html,
        body {
            font-size: 12px;
        }
    }
    @media screen and (min-width: 1200px) {
        html,
        body {
            font-size: 14px;
        }
    }
    
    .activeTab {
        background: rgb(1 54 62 / 10%);
        border-radius: 10px;
    }  

`;

export default GLobalStyle;
