import { keyframes, styled } from '@stitches/react'

import BackgroundCard from '../../assets/background-temperature-now.jpg'

const animateCloud = keyframes({
  '0%': {
    backgroundPosition: '100% center'
  },

  '100%': {
    backgroundPosition: '0 center'
  }
})


const TemperatureNow = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 480,
  padding: 12,
  background: `url('${BackgroundCard}') center center / cover no-repeat`,
  animation: `${animateCloud} 32s linear alternate infinite`,


  '.img-weather': {
    position: 'absolute',
    top: 0,
    left: '-10%',
    width: 'fit-content',
    height: 'fit-content',
  },

  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#6D67D0',
    zIndex: -1,
    borderRadius: 8,
  },

  '@media(min-width: 678px)': {
    borderRadius: 8,

    '.img-weather': {
      top: '-4%',
      left: '-10%',
    }
  }
})

const Location = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  padding: '16px 16px 0 0',
  color: '#C2BFF4',
  fontWeight: 'bold',
  fontSize: 14,
})

const TemperatureBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontWeight: 'bold',
  margin: '60px 0 164px',

  '> p': {
    position: 'relative',
    fontSize: 88,
    lineHeight: 1.2,

    span: {
      position: 'absolute',
      fontSize: 24,
      top: '14%',
      right: '-24%',
      color: '#DAD8F7'
    }
  }
})

const PrevTemperatureBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: 20,
  color: "#FFFFFF",

  span: {
    color: '#DAD8F7'
  }
})

const TemperatureFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: 8,
  flexDirection: 'column',

  '@media(min-width:1200px)': {
    flexDirection: 'row',
  }
})

const StatisticsBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  backgroundColor: 'hsla(243, 48%, 58%, .6)',
  borderRadius: 8,
  padding: '12px 16px',
  color: '#E7E6FB',
  flex: 1,

  '> div': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  'div > p:last-child': {
    fontWeight: 'bold',
  },

  '@media(min-width: 1200px)': {
    '> div': {
      flexDirection: 'column',
      justifyContent: 'flex-start',

    }
  }
})

const IconBox = styled('i', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 32,
  width: 32,
  minHeight: 32,
  height: 32,
})

export default {
  TemperatureNow,
  Location,
  TemperatureBox,
  PrevTemperatureBox,
  TemperatureFooter,
  StatisticsBox,
  IconBox
}