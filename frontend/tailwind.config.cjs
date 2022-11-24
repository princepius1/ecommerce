/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image1": "url('/src/assets/man.jpg')",
        "hero-image2": "url('/src/assets/man2.jpg')",
        "hero-image3": "url('/src/assets/man3.jpg')",
        "hero-image4": "url('/src/assets/man4.jpg')",
        "hero-image5": "url('/src/assets/man5.jpg')",
        "hero-image6": "url('/src/assets/man6.jpg')",
        "hero-image7": "url('/src/assets/man7.jpg')",
        "hero-image8": "url('/src/assets/sneaker2.jpg')",
      },
      height: {
        128: "35rem",
      },
    },
  },
  plugins: [],
};
