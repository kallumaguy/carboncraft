// eslint-disable-next-line no-unused-vars
import React from "react";
import { Particles } from "react-tsparticles";
import particlesConfig from "../../../particles-config";

const ParticleBackground = () => {
  return <Particles params={particlesConfig} className="z-0"></Particles>;
};

export default ParticleBackground;
