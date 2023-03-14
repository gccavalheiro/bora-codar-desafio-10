import { TemperatureNow } from './components/TemperatureNow/TemperatureNow'
import { SunTime } from './components/SunTime/SunTime'
import { AirQuality } from './components/AirQuality/AirQuality'
import { WeekWeather } from './components/WeekWeather/WeekWeather'

import Styled from './App.styles'

function App() {
  return (
    <Styled.Container>
      <TemperatureNow />
      <Styled.Box>
        <Styled.Wrapper>
          <AirQuality />
          <SunTime />
        </Styled.Wrapper>
        <WeekWeather />
      </Styled.Box>
    </Styled.Container>
  )
}

export default App
