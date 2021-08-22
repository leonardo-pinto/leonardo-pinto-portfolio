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
          // number: {
          //   value:300,
          //   density: {
          //     enable:true,
          //     value_area:900,
          //   },
          // },
          shape: {
            type:"square",
            stroke: {
              width:6,
              color:"#ff59b0"
            }
          }
        },
      }} 
    />
  );
}

export default ParticlesBackground;