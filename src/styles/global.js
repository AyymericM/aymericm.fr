import { createGlobalStyle } from 'styled-components'
import { colors } from './constants'
import AvenirNextLTProWoff from 'assets/AvenirNextLTPro-Demi.woff'
import AvenirNextLTProWoff2 from 'assets/AvenirNextLTPro-Demi.woff2'

/* eslint no-unused-expressions: 0 */
const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Avenir Next LT Pro";
        src: local('Avenir Next LT Pro'), local('AvenirNextLTPro'),
        url(${AvenirNextLTProWoff}) format('woff'),
        url(${AvenirNextLTProWoff2}) format('woff2');
    }
    
    * {
        list-style: none;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        color: ${colors.black};
        font-weight: 800;
        background-color: white;
        font-family: 'Avenir Next LT Pro', sans-serif;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: ${colors.blue};
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: white;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.blue};
        border-radius: 2px;
    }
`

export default GlobalStyles