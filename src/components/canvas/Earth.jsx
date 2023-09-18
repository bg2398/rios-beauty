import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Import your loader component

const Earth = () => {
  const earth = useGLTF("./dyson_supersonic/scene.gltf");

  // Adjust the scale to make the model smaller (e.g., scale it down to 50%)
  const scale = [0.7, 0.7, 0.7];
  
  // Rotate the model 90 degrees around the X-axis to make it vertical
  const rotation = [-Math.PI / 2, 0, 0];

  return (
    <primitive object={earth.scene} scale={scale} rotation={rotation} position-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      >
      {/* Add a directional light */}
      <directionalLight
        position={[2, 9, 2]} // Adjust the position as needed
        intensity={9} // Adjust the intensity of the light
        castShadow={false} // Enable shadows
      />
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
