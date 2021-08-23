import React from 'react';
import Particles from 'react-particles-js';

function ParticlesBackground() {
  return (
    <Particles 
      style={{
        height: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: '-1'
      }}
      params={{
        polygon:{
          enable: true,
          type: "inside",
          move: {
            radius: 40,
          },
          shape: {
            type:"square",
          }
        },
      }} 
    />
  );
}

export default ParticlesBackground;