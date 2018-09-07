import Typography from 'typography'
import colors from './colors'

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['200', '400', '700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  lightWeight: 200,
  boldWeight: 700,
  overrideStyles: () => ({
    body: {
      background: colors.background,
    },
    img: {
      margin: '0',
    },
    a: {
      textDecoration: 'none',
      color: colors.primary,
    },
    'a:hover': {
      color: colors.primaryLight,
    },
  }),
})

export default typography
