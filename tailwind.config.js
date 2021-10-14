module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            headline: ['ProximaNova-Bold'],
            text: ['ProximaNova-Regular'],
        },
        colors: {
            primary: '#E1003C',
            bg: '#1A1C24',
            bgHighlight: '#24252F',
            hrColor: '#353745',
            colorChat: '#393B4B',
            textColor: '#C5C6D3',
            disabled: '#15171E',
            headline: '#ffffff',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
