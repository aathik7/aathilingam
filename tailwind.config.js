/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                display: ['Ubuntu', 'sans-serif'],
            },
            colors: {
                "primary": "#38BDF8",

                // Light theme
                "background-primary-light": "#F9FAFB",
                "background-secondary-light": "#FFFFFF",
                "text-primary-light": "#1F2937",
                "text-secondary-light": "#6B7280",
                "border-color-light": "#E5E7EB",

                // Dark theme
                "background-primary-dark": "#101828",
                "background-secondary-dark": "#1D2939",
                "text-primary-dark": "#F9FAFB",
                "text-secondary-dark": "#98A2B3",
                "border-color-dark": "#344054",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'icon-shine': 'iconShine 6s ease-in-out infinite',
                'beam-flow': 'beamFlow 6s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                iconShine: {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 0 rgba(56, 189, 248, 0)'
                        /* Colors handled by class overrides or base styles to allow theme transition */
                    },
                    '5%': {
                        transform: 'scale(1.15)',
                        boxShadow: '0 0 15px 2px rgba(56, 189, 248, 0.5)',
                        backgroundColor: '#38BDF8',
                        borderColor: '#38BDF8',
                        color: '#FFFFFF'
                    },
                    '10%': {
                        transform: 'scale(1)',
                        boxShadow: '0 0 0 0 rgba(56, 189, 248, 0)'
                        /* Revert to base handled by CSS classes */
                    }
                },
                beamFlow: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
