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
            primary: '#663399',
            bg: '#fff',
            bgHighlight: '#24252F',
            hrColor: '#353745',
            colorChat: '#393B4B',
            text: '#232129',
            disabled: '#15171E',
            headline: '#232129',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
