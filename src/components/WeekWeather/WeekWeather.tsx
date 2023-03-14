import Thunder from '../../assets/thunder.svg'
import SunCloud from '../../assets/sun-cloud.svg'
import Rain from '../../assets/rain.svg'
import Sun from '../../assets/sun.svg'
import Cloud from '../../assets/Cloud.svg'

import Styled from './WeekWeather.styles'

export function WeekWeather() {
  return (
    <Styled.WeekWeather>
      <Styled.WeekBox>
        <p>Amanhã</p>
        <Styled.IconBox>
          <img src={Cloud} alt="Horário do sol" />
        </Styled.IconBox>
        <p>
          21°<span>16°</span>
        </p>
      </Styled.WeekBox>
      <Styled.WeekBox>
        <p>Sexta-Feira</p>
        <Styled.IconBox>
          <img src={Sun} alt="Horário do sol" />
        </Styled.IconBox>
        <p>
          21°<span>16°</span>
        </p>
      </Styled.WeekBox>
      <Styled.WeekBox>
        <p>Sábado</p>
        <Styled.IconBox>
          <img src={Rain} alt="Horário do sol" />
        </Styled.IconBox>
        <p>
          21°<span>16°</span>
        </p>
      </Styled.WeekBox>
      <Styled.WeekBox>
        <p>Domingo</p>
        <Styled.IconBox>
          <img src={Thunder} alt="Horário do sol" />
        </Styled.IconBox>
        <p>
          21°<span>16°</span>
        </p>
      </Styled.WeekBox>
      <Styled.WeekBox>
        <p>Segunda-feira</p>
        <Styled.IconBox css={{ img: { marginBottom: 'auto' } }}>
          <img src={SunCloud} alt="Horário do sol" />
        </Styled.IconBox>
        <p>
          21° <span>16°</span>
        </p>
      </Styled.WeekBox>
    </Styled.WeekWeather>
  )
}
