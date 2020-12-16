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

export {
    colors,
    sizes
}