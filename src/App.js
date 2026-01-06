import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DoorSing } from "doorsing_models";

function App() {
  const doorMaterials = {
    doorMaterial: "#C0C0C0",
    cutoutMaterial: { value: "#ff0000", opacity: 1 },
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
          cpid="Door_05"
          materials={doorMaterials}
          // doorPivot={"left"}
          // doorOpening={"in"}
          // width={500}
          // height={2000}
          // depth={200}
          // frontDepth={10}
          // backDepth={12}
          // cutYPosition={300}
          // cutHeightDM={400}
          // position={[0, 0, 0]}
        />
      </group>
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
