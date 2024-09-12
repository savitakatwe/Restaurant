/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'purple-primary': '#6C5FBC',
                'dark-primary': '#201F1F',
                'dark-secondary': '#606060',
                'dark-tertiary': '#676767',
            }
        },
    },
    plugins: [],
}