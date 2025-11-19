import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DoorSing } from "doorsing_models";

function App() {
  const doorMaterials = {
    doorMaterial: "#C0C0C0",
    frameMaterial: { value: "#ff0000", opacity: 1 },
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* DoorSing Model */}
      <DoorSing
        cpid="Door_04"
        materials={doorMaterials}
        // --- General Dimensions ---
        width={800}
        height={2200}
        // --- Model-Specific Dimensions ---
        // For Door_04, Door_05, Door_06:
        depth={25}
        // For Door_02, Door_03:
        // frontDepth={12}
        // backDepth={15}

        // --- Handle/Cutout Position ---
        // For Door_05, Door_06: Vertical position of handle from the bottom
        cutYPosition={400}
        // cutHeightDM={100}
        // --- Animation and View ---
        doorPivot="right"
        doorOpening="in"
      />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
