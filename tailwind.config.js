const {heroui} = require('@heroui/theme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
