import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { TrafficLight } from './01-useState/TrafficLight'
import { PokemonPage } from './03-examples/PokemonPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    <PokemonPage />
  </StrictMode>,
)
