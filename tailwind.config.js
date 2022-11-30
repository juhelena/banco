/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
	    colors: {
	      'cor-cinza': '#EFF1F4',
        'cor-texto': '#ffffff',
        'cor-principal': '#e52338',
        'cor-preto': '#0f1f33',
        'cor-cards': '#f5f5f5',
        'red-escuro': '#D92337',
        'cor-clara': '#FCE4E7',
        'cor-fundo': '#f7f9fc',
        'cor-icone': "#0f1f33af",
        'cor-footer': "#E6E8EB",
        'cor-texto-cinza': '#202121',
        'cor-gray': '#666666',
	    },
      fontFamily:{
        'fonte': 'Poppins, sans-serif',
      },
      backgroundImage: {
        'img-fundo': "url('./imagens/fundo.jpg')",
      },
      boxShadow: {
        'shadow': '0 5px 25px rgb(1 1 1 / 15%)',
        'shadow-form': '10px 10px 15px rgba(0,0,0,0.05)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0rem)'},
          '50%': { transform: 'translateY(3rem)'},
        } 
      },
      animation: {
        'img-animation': 'wiggle 5s linear infinite',
      },
    },
  },
  plugins: [],
}
