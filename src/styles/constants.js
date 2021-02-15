import { keyframes, css } from 'styled-components'

const colors = {
    blue: '#001AFF',
    gray: '#C4C4C4',
    black: '#373737'
}

const sizes = {
    desktopHeight: 1100,
    desktopWidth: 1240,
    tablet: 800,
    mobile: 440,
    isSmallerThanDesktop: 'screen and (max-width: 1240px), screen and (max-height: 1100px)',
    isTablet: 'screen and (max-width: 800px) and (min-width: 441px)',
    isMobile: 'screen and (max-width: 440px)',
}

const animations = {
    fadeIn: keyframes`
        from {
            opacity: 0;
            transform: translateY(75px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `,
    fadeInMobile: keyframes`
        from {
            opacity: 0;
            transform: translateY(10vw);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `,
    fadeOut: keyframes`
        from {
            opacity: 1;
            transform: translateY(0);
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 0;
            transform: translateY(-75px);
        }
    `,
    fadeOutMobile: keyframes`
        from {
            opacity: 1;
            transform: translateY(0);
        }
        50% {
            opacity: 0;
        }
        to {
            opacity: 0;
            transform: translateY(-5vw);
        }
    `
}

export {
    colors,
    sizes,
    animations
}