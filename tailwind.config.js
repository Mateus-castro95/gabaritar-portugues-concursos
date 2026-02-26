/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0056b3', // Professional blue
                    50: '#eef6ff',
                    100: '#d9eaff',
                    200: '#bcd9ff',
                    300: '#8fbcff',
                    400: '#5b96ff',
                    500: '#346eff',
                    600: '#1d4bff',
                    700: '#143bdb',
                    800: '#1731b0',
                    900: '#182e8b',
                    950: '#131e55',
                },
                secondary: {
                    DEFAULT: '#ffffff',
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                },
                success: '#10b981',
                warning: '#f59e0b',
                error: '#ef4444',
                info: '#3b82f6',
                neutral: {
                    black: '#000000',
                    white: '#ffffff',
                    dark: '#1e293b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
