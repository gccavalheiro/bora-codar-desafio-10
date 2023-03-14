import Leaf from '../../assets/leaf.svg'

import Styled from './AirQuality.styles'

export function AirQuality() {
  return (
    <Styled.AirQuality>
      <Styled.HeadingBox>
        <Styled.IconBox>
          <img src={Leaf} alt="Qualidade do ar" />
        </Styled.IconBox>
        <p>Qualidade do ar</p>
      </Styled.HeadingBox>
      <Styled.AirQualityValue>
        <p>Boa</p>
        <p>21</p>
      </Styled.AirQualityValue>

      <Styled.AirQualityVariants>
        <Styled.AirQualityVariant>
          <p>12.9</p>
          <p>PM2.5</p>
        </Styled.AirQualityVariant>
        <Styled.AirQualityVariant>
          <p>12.9</p>
          <p>PM10</p>
        </Styled.AirQualityVariant>
        <Styled.AirQualityVariant>
          <p>2.1</p>
          <p>SO²</p>
        </Styled.AirQualityVariant>
        <Styled.AirQualityVariant>
          <p>1.4</p>
          <p>NO²</p>
        </Styled.AirQualityVariant>
        <Styled.AirQualityVariant>
          <p>21.2</p>
          <p>O³</p>
        </Styled.AirQualityVariant>
        <Styled.AirQualityVariant>
          <p>0.7</p>
          <p>CO</p>
        </Styled.AirQualityVariant>
      </Styled.AirQualityVariants>
    </Styled.AirQuality>
  )
}
