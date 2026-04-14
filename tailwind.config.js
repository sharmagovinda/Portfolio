/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: '#3b82f6',        // Tailwind blue-500
                'primary-dark': '#2563eb', // Tailwind blue-600
                'primary-light': '#60a5fa',// Tailwind blue-400
                dark: '#0f172a',           // Tailwind slate-900
                'dark-card': '#1e293b',    // Tailwind slate-800
            }
        }
    },
    plugins: [],
}
