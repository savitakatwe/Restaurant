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

// text-xs	font-size: 0.75rem; /* 12px */
// line-height: 1rem; /* 16px */
// text-sm	font-size: 0.875rem; /* 14px */
// line-height: 1.25rem; /* 20px */
// text-base	font-size: 1rem; /* 16px */
// line-height: 1.5rem; /* 24px */
// text-lg	font-size: 1.125rem; /* 18px */
// line-height: 1.75rem; /* 28px */
// text-xl	font-size: 1.25rem; /* 20px */
// line-height: 1.75rem; /* 28px */
// text-2xl	font-size: 1.5rem; /* 24px */
// line-height: 2rem; /* 32px */
// text-3xl	font-size: 1.875rem; /* 30px */
// line-height: 2.25rem; /* 36px */
// text-4xl	font-size: 2.25rem; /* 36px */
// line-height: 2.5rem; /* 40px */
// text-5xl	font-size: 3rem; /* 48px */
// line-height: 1;
// text-6xl	font-size: 3.75rem; /* 60px */
// line-height: 1;
// text-7xl	font-size: 4.5rem; /* 72px */
// line-height: 1;
// text-8xl	font-size: 6rem; /* 96px */
// line-height: 1;
// text-9xl	font-size: 8rem; /* 128px */
// line-height: 1;

// font-thin	font-weight: 100;
// font-extralight	font-weight: 200;
// font-light	font-weight: 300;
// font-normal	font-weight: 400;
// font-medium	font-weight: 500;
// font-semibold	font-weight: 600;
// font-bold	font-weight: 700;
// font-extrabold	font-weight: 800;
// font-black	font-weight: 900;