import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '400i', '700', '700i'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],

  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
})

export default typography
