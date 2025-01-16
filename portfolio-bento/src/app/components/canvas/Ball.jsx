// BallCanvas.jsx
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  View,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const ref = useRef();
  
  return (
    <div ref={ref} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            minPolarAngle={(5 * Math.PI) / 12} // Slight upward tilt (75 degrees)
            maxPolarAngle={(7 * Math.PI) / 12} // Slight downward tilt (105 degrees)
            minAzimuthAngle={-Math.PI / 12} // Restrict left rotation
            maxAzimuthAngle={Math.PI / 12} // Restrict right rotation
          />
          <Ball imgUrl={icon} />
        </Suspense>
      </View>
    </div>
  );
};

export default BallCanvas;