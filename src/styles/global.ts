import { globalCss } from '@stitches/react';

import Cloud from '../assets/background.png'

export const globalStyles = globalCss({
  ":root": {
    fontSynthesis: 'none',
    textEendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    outline: "none",

    "::-webkit-scrollbar": {
      width: ".375rem",
      height: ".375rem",
      backgroundColor: "#5F59C5",
      borderRadius: 8,
    },

    "::-webkit-scrollbar-thumb": {
      background: "#C2BFF4",
      borderRadius: 8,
    },

    "::-webkit-scrollbar-thumb:hover": {
      background: "#C2BFF4",
      borderRadius: 8,
    },
  },

  html: {
    scrollBehavior: "smooth",

    '@bp3': {
      fontSize: '97.5%'
    },

    '@bp2': {
      fontSize: '87.5%'
    }
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    minHeight: '100vh',
    fontFamily: 'Lato, sans-serif',
    backgroundColor: '#8E87FA',
    color: "#FFFFFF"
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },

  '#root': {
    minHeight: '100vh',
    position: 'relative',

    '&:before': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: `url('${Cloud}') center center / cover no-repeat`,
      zIndex: -1,
    }
  }
})