import React, { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

const particles = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#232741",
    image:
      "url('https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "50%",
  },
};

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const [particlesOptions, setParticlesOptions] = useState(particles);
  const [inputGravity, setinputGravity] = useState(particlesOptions.particles.move.attract.enable);
  const [inputSize, setinputSize] = useState(particlesOptions.particles.size.value);
  const [inputOpacity, setinputOpacity] = useState(particlesOptions.particles.opacity.value);

  function functionEnableGravity() {
    setinputGravity(!inputGravity);
    console.log(!inputGravity);
    return setParticlesOptions({
      ...particles,
      particles: {
        ...particles.particles,
        move: { ...particles.particles.move, attract: { ...particles.particles.move.attract, enable: !inputGravity } },
      },
    });
  }

  function changeParticlesSize(e) {
    setinputSize(e.target.value);
    console.log(e.target.value / 2);
    console.log(particlesOptions.particles.move.attract.enable);
    return setParticlesOptions({
      ...particles,
      particles: {
        ...particles.particles,
        size: { ...particles.particles.size, value: e.target.value / 2 },
      },
    });
  }

  function changeParticlesOpacity(e) {
    setinputOpacity(e.target.value);
    console.log(e.target.value / 99);
    return setParticlesOptions({
      ...particles,
      particles: {
        ...particles.particles,
        opacity: { ...particles.particles.opacity, value: e.target.value / 99 },
      },
    });
  }

  return (
    <div className="App">
      <div className="legend">

        <label htmlFor="sizeRange" id="sizeRange" name="sizeRange">
          Size
        </label>
        <input
          id="sizeRange"
          type="range"
          value={inputSize}
          onChange={changeParticlesSize}
        />
        <label htmlFor="opacityRange" id="opacityRange" name="opacityRange">
          Opacity
        </label>
        <input
          id="opacityRange"
          type="range"
          value={inputOpacity}
          onChange={changeParticlesOpacity}
        />

        <label htmlFor="gravity" id="gravity" name="gravity">
          Gravity
        </label>
        <input
          id="gravity"
          type="checkbox"
          value={inputGravity}
          onChange={functionEnableGravity}
        />

      </div>
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  );
}

export default App;