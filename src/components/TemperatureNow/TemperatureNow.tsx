import Pin from '../../assets/pin.svg'
import Weather from '../../assets/weather.svg'
import Humidity from '../../assets/humidity.svg'
import Wind from '../../assets/wind.svg'
import RainGray from '../../assets/rain-gray.svg'

import Styled from './TemperatureNow.styles'

export function TemperatureNow() {
  return (
    <Styled.TemperatureNow>
      <Styled.Location>
        <Styled.IconBox>
          <img src={Pin} alt="Localização" />
        </Styled.IconBox>
        Rio do Sul, SC
      </Styled.Location>

      <Styled.TemperatureBox>
        <p>
          18<span>°C</span>
        </p>

        <Styled.PrevTemperatureBox>
          <p>
            22° <span>16°</span>
          </p>
        </Styled.PrevTemperatureBox>
      </Styled.TemperatureBox>

      <Styled.TemperatureFooter>
        <Styled.StatisticsBox>
          <Styled.IconBox>
            <img src={Wind} alt="Umidade" />
          </Styled.IconBox>
          <div>
            <p>Vento</p>
            <p>17 km/h</p>
          </div>
        </Styled.StatisticsBox>

        <Styled.StatisticsBox>
          <Styled.IconBox>
            <img src={Humidity} alt="Umidade" />
          </Styled.IconBox>
          <div>
            <p>Umidade</p>
            <p>31%</p>
          </div>
        </Styled.StatisticsBox>

        <Styled.StatisticsBox>
          <Styled.IconBox>
            <img src={RainGray} alt="Umidade" />
          </Styled.IconBox>
          <div>
            <p>Chuva</p>
            <p>10%</p>
          </div>
        </Styled.StatisticsBox>
      </Styled.TemperatureFooter>
      <img src={Weather} alt="Clima" className="img-weather" />
    </Styled.TemperatureNow>
  )
}
