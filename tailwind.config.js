/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/aos/dist/aos.css",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      text: "#040316",
      background: "#fbfbfe",
      primary: "#d6603b",
      secondary: "#FBF8EF",
      accent: "#D6603B",
      "blue-prime": "#242659",
      "blue-accent": "#97a1c8",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      heading: "Poppins",
      body: "Hind",
      logo: "Montserrat",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "0rem",
        md: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "blue-gradient":
          "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 98.2% )",
        "orange-gradient":
          "linear-gradient(90deg, rgba(235,138,63,1) 0%, rgba(214,96,59,1) 80%)",
        services: "url('/images/Services/service-bg.png')",
        printplot: "url('/images/Printers-Plotters/printplot-bg.png')",
        desklap: "url('/images/Desktops-Laptops/desklap-bg.png')",
        "furniture-bg": "url('/images/Furnitures/furniture-bg.png')",
        "about-bg": "url('/images/About/about-bg.jpg')",
        "about-bg-mob": "url('/images/About/about-bg-mob.jpg')",
        "enquiry-bg": "url('/images/Enquiry/enquiry-bg.png')",
      },

      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
