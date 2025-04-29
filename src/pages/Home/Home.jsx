import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  useHelper,
  Float,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  DepthOfField,
} from "@react-three/postprocessing";
import SpinningCube from "../../three/SpinningCube";
import Computer from "../../three/Computer";
import Exoplanets from "../../three/Exoplanets";
import { use, useState } from "react";
import Timline from "./Timline";
import Whythis from "./Whythis";
import ParticleScene from "../../three/Particlescene";
import Footer from "./Footer";
import Macbook from "../../three/Macbook";
import Hero from "./Hero";
import { motion } from "framer-motion";
import { IoSettingsSharp } from "react-icons/io5";

function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.25}
        luminanceThreshold={0}
        luminanceSmoothing={20}
        height={300}
      />
      <Vignette eskil={false} offset={0.2} darkness={0.7} />
    </EffectComposer>
  );
}

const EnvironmentOptions = [
  "apartment",
  "city",
  "dawn",
  "forest",
  "lobby",
  "night",
  "park",
  "studio",
  "sunset",
  "warehouse",
];

export default function Home({ setPage }) {
  const [showControls, setShowControls] = useState(false);

  //contrling shit
  const [envi, setEnvi] = useState("studio");
  const [switchModel, toggleModel] = useState(true);
  const [cube, toggleCube] = useState(true);
  const [light, toggleLight] = useState(true);
  const [bg, tooglebg] = useState(true);
  const [lightColor, setColor] = useState("#4f46e5");
  const [zoom, toogleZoom] = useState(false);

  return (
    <>
      <Hero setPage={setPage} />

      <div className="w-full h-[600px] mt-16 shadow-xl cursor-grab active:cursor-grabbing relative">
        <button
          onClick={() => setShowControls(!showControls)}
          className="absolute top-4 right-4 z-10 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-500 transition-colors transform hover:scale-110 transition-transform duration-200"
        >
          <IoSettingsSharp size={15} />
        </button>

        {/* Settings 🫡*/}
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 right-4 z-10 backdrop-blur-md bg-white/5 p-4 rounded-lg shadow-sm hover:shadow-2xl  w-64 font-dragon transition-shadow"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Environment
                </label>
                <select
                  value={envi}
                  onChange={(e) => setEnvi(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                >
                  {EnvironmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Toggle Model
                </span>
                <button
                  onClick={() => toggleModel(!switchModel)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    switchModel ? "bg-indigo-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {switchModel ? "Macbook" : "Computer"}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Spinning Cube
                </span>
                <button
                  onClick={() => toggleCube(!cube)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    cube ? "bg-indigo-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {cube ? "On" : "Off"}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Background
                </span>
                <button
                  onClick={() => tooglebg(!bg)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    bg ? "bg-indigo-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {bg ? "On" : "Off"}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Zoom Controls
                </span>
                <button
                  onClick={() => toogleZoom(!zoom)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    zoom ? "bg-indigo-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {zoom ? "On" : "Off"}
                </button>
              </div>

              <label className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                Light<span className="font-sans">/</span>Cube Color:
                <input
                  type="color"
                  value={lightColor || "#ffffff"}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                />
              </label>
            </div>
          </motion.div>
        )}

        <Canvas shadows camera={{ position: [0, 2, 4], fov: 70 }}>
          {/* 1. Lighting */}
          <ambientLight intensity={0.15} color={lightColor || "#ffffff"} />

          <directionalLight
            position={[3, 8, 5]}
            intensity={0.8}
            color={lightColor || "#e0e7ff"}
            castShadow
            shadow-mapSize={1024}
            shadow-camera-far={30}
            shadow-normalBias={0.05}
          />
          <directionalLight
            position={[-5, 3, 2]}
            intensity={0.3}
            color="#ffffff"
            castShadow={false}
          />
          <directionalLight
            position={[0, 3, -5]}
            intensity={0.4}
            color={lightColor ? `${lightColor}80` : "#a5b4fc80"}
            castShadow={false}
          />
          <pointLight
            position={[1, 2, 1]}
            intensity={8}
            color={lightColor || "#c7d2fe"}
            distance={6}
            decay={1.5}
          />
          <pointLight
            position={[-1, 1.5, -1]}
            intensity={5}
            color="#ffffff"
            distance={5}
            decay={2}
          />

          <Environment
            preset={envi}
            background={bg}
            intensity={0.9}
            resolution={1024}
          />

          {switchModel ? (
            <Macbook
              scale={10}
              position={[1, -1, 0]}
              rotation={[Math.PI / 18, 0, Math.PI / -180]}
            />
          ) : (
            <Computer position={[1, -1, 0]} scale={[0.7, 0.7, 0.7]} />
          )}

          {cube && <SpinningCube col={lightColor} />}

          {/* <Effects /> */}

          <OrbitControls
            enableZoom={zoom}
            autoRotate
            autoRotateSpeed={1.6}
            enablePan
          />
        </Canvas>
      </div>

      <Whythis />

      <div className="relative py-8">
        <ParticleScene className="absolute inset-0 h-full w-full" />
        <div className="relative z-10">
          <Timline />
        </div>
      </div>

      <Footer />
    </>
  );
}
