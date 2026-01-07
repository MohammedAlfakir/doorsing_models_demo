import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DoorSing } from "doorsing_models";
import { Material } from "three";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

function App() {
  const texture = useLoader(
    THREE.TextureLoader,
    "https://cdn.polyhaven.com/asset_img/primary/wood_floor.png"
  );

  const doorMaterials = {
    doorMaterial: new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.8,
    }),
    cutoutMaterial: new THREE.MeshStandardMaterial({
      color: "#999555",
      roughness: 0.2,
      metalness: 0.5,
    }),
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 300], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* DoorSing Model */}
      <group scale={0.1}>
        <DoorSing
          cpid="Door_04"
          materials={doorMaterials}
          // doorPivot={"left"}
          // doorOpening={"in"}
          // width={500}
          // height={2000}
          // depth={200}
          // frontDepth={10}
          // backDepth={12}
          // cutYPosition={400}
          // cutHeightDM={500}
          // position={[0, 0, 0]}
        />
      </group>
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
