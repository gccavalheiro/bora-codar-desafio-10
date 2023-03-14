import { styled } from '@stitches/react'

const AirQuality = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'yellow',
  width: '100%',
  height: 244,
  backgroundColor: '#6D67D0',
  borderRadius: 8,
  padding: '32px 16px 16px ',

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

const AirQualityValue = styled('div', {
  fontWeight: 'bold',
  textAlign: 'center',

  'p:nth-of-type(1)': {
    fontSize: 18,
    color: '#87EBCD'
  },

  'p:nth-of-type(2)': {
    fontSize: 40,
  }
})

const AirQualityVariants = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: 16,
})

const AirQualityVariant = styled('div', {
  flex: 1,
  width: 'fit-content',
  textAlign: 'center',

  'p:nth-of-type(1)': {
    fontSize: 14,
    color: '#87EBCD',
    fontWeight: 'bold',
  },
  'p:nth-of-type(2)': {
    fontSize: 12,
    color: '#E7E6FB',
  }
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
  AirQuality,
  AirQualityValue,
  AirQualityVariant,
  AirQualityVariants,
  HeadingBox,
  IconBox
}