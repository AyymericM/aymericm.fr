import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
    
    * {
        list-style: none;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        color: white;
        background-color: black;
        font-family: 'Cutive Mono', monospace;
    }

    a {
        text-decoration: none;
    }

    @keyframes colorRotate {
        0% {
            filter: hue-rotate(360deg) brightness(0.5);
        }
        50% {
            filter: hue-rotate(0) brightness(1);
        }
        100% {
            filter: hue-rotate(360deg) brightness(0.5);
        }
    }
`