import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({

    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#484D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#F5F8FA",
            "50": "#DADADA",
        }
    },

    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.50'
            }
        }
    }
})