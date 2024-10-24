/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#12305B",
                    90: "#21384299",
                },
                red: {
                    100: "#FC5959",
                },
                green: {
                    100: "#4D533C",
                },
                white: {
                    100: "#ffffff",
                },
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                
            },
            fontSize: {
                "2xl": ["60px", "74px"],
                xl: ["36px", "48px"],
                "3lg": ["24px", "38px"],
                "2lg": ["18px", "27px"],

                lg: ["16px", "24px"],
                md: ["14px", "20px"],
                "2sm": ["12px", "16px"],
                sm: ["10px", "14px"],
            },
            dropShadow: {
                "2xl": "0 100px 100px rgba(0, 0, 0, 0.15)",
                "3xl": "0 50px 100px rgba(0, 0, 0, 0.15)",
                "4xl": [
                    "0 100px 100px rgba(0, 0, 0, 0.15)",
                    "0 100px 100px rgba(0, 0, 0, 0.15)",
                ],
            },
            
            backgroundImage: {
                "hero-background": "url('/src/assets/images/Slider.png')",
                "hero-background2": "url('/src/assets/images/Slider2.png')",
                "small-hero-background2": "url('/src/assets/images/Slider3.png')",
                
            },
        },
    },
    plugins: [],
}
