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
    p: {
      marginBottom: '1rem',
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
    button: {
      display: 'inherit',
      color: 'grey',
      background: colors.background,
      margin: '0',
      padding: '0.5rem 1rem',
      border: 'solid 1px',
      borderColor: colors.grey,
      borderRadius: '4px',
      fontWeight: 'lighter',
      transition: 'all 0.5s ease 0s',
    },
    'button:hover': {
      color: 'white',
      background: colors.primary,
      borderColor: colors.primaryDark,
    },
  }),
})

export default typography
