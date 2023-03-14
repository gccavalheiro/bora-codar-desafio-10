import { styled } from '@stitches/react'

const SunTime = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'purple',
  width: '100%',
  height: 244,
  padding: 32,
  backgroundColor: '#6D67D0',
  borderRadius: 8,

  '@media(min-width: 768px)': {
    maxWidth: 277,
  }
})

const HeadingBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  p: {
    fontWeight: 'bold',
    color: '#DAD8F7'
  }
})

const SunChartBox = styled('div', {
  position: 'relative',

  img: {
    width: '100%',
  },

  'p:nth-of-type(1)': {
    position: 'absolute',
    width: 'fit-content',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  'p:nth-of-type(2)': {
    position: 'absolute',
    width: 'fit-content',
    top: '100%',
    left: '-6%',
    fontSize: 12,
  },
  'p:nth-of-type(3)': {
    position: 'absolute',
    width: 'fit-content',
    top: '100%',
    right: '-6.5%',
    fontSize: 12,
  },
})

const IconBox = styled('i', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 24,
  width: 24,
  minHeight: 24,
  height: 24,
})

export default {
  HeadingBox,
  SunChartBox,
  SunTime,
  IconBox,
}