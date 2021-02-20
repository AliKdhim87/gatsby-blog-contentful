import React from 'react'
import Particles from 'react-particles-js'
import {useTheme} from 'styled-components'

import {darkMode} from 'utils/darkMode'

const ParticlesBackground: React.FC = () => {
  const {mode, colors} = useTheme()
  return (
    <Particles
      style={{position: 'absolute', width: '100%', height: '100%'}}
      params={{
        background: {
          color: darkMode(mode) ? colors.black : colors.white,
        },
        particles: {
          color: {
            value: darkMode(mode) ? colors.white : colors.black,
          },
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  )
}

export default ParticlesBackground
