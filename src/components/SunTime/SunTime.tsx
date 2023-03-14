import Sun from '../../assets/sun-time.svg'
import SunChart from '../../assets/sun-chart.svg'

import Styled from './SunTime.styles'

export function SunTime() {
  return (
    <Styled.SunTime>
      <Styled.HeadingBox>
        <Styled.IconBox>
          <img src={Sun} alt="Horário do sol" />
        </Styled.IconBox>
        <p> Horário do sol </p>
      </Styled.HeadingBox>
      <Styled.SunChartBox>
        <img src={SunChart} />
        <p>16:01</p>
        <p>06:12</p>
        <p>18:52</p>
      </Styled.SunChartBox>
    </Styled.SunTime>
  )
}
