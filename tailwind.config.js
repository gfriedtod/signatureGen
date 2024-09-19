
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'logo' : "url('app/assets/logo.png')",
        'gradiant' : "linear-gradient(90deg, #cdffd8 0%, #94b9ff 100%)"
      }

    },
  },
  plugins: [],
};
