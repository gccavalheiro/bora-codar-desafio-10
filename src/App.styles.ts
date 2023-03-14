import { styled } from '@stitches/react'

const Container = styled('div', {
  display: 'flex',
  maxWidth: 1090,
  width: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  alignItems: 'center',
  gap: 32,
  flexDirection: 'column',
  paddingBottom: 32,

  '@media(min-width: 768px)': {
    padding: '60px 0 32px',
  },

  '@media(min-width: 1200px)': {
    flexDirection: 'row',
    padding: 0,
  }
})

const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  width: '100%',
  padding: '0 16px',

  '@media (min-width: 768px)': {
    padding: 0,
  }
})

const Wrapper = styled('div', {
  display: 'flex',
  gap: 32,
  flexDirection: 'column',
  width: '100%',

  '@media(min-width:768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default {
  Box,
  Container,
  Wrapper,
}
