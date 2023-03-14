import { styled } from '@stitches/react'

const WeekWeather = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'white',
  width: '100%',
  backgroundColor: '#6D67D0',
  gap: 12,
  padding: 16,
  borderRadius: 8,
  overflowX: 'auto',

  '@media(min-width: 678px)': {
    padding: 40,
  }
})

const WeekBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: '0 1 90px',
  height: '100%',

  '> p': {
    fontWeight: 'bold',
    color: '#DAD8F7',
    fontSize: 14,
    whiteSpace: 'nowrap',
  },

  i: {
    margin: '16px 0',
  },

  'p:last-child': {
    color: '#FFFFFF',
    fontSize: 16,
    span: {
      color: '#C2BFF4',
      marginLeft: 4,
    }
  }
})

const IconBox = styled('i', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 64,
  width: 64,
  minHeight: 64,
  height: 64,
})

export default {
  WeekWeather,
  WeekBox,
  IconBox,
}