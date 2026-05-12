import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SpecialKms } from "@oak-some/special-kms";

function App() {
  const doorMaterial = React.useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 0.8,
        // metalness: 0.1,
      }),
    []
  );

  const handlerMaterial = React.useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#000000",
        // roughness: 0.2,
        // metalness: 0.5,
      }),
    []
  );

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 0, 300], fov: 50 }} shadows>
        <ambientLight intensity={1} />
        <directionalLight
          position={[0, 5, 5]}
          intensity={1.5}
          shadow-bias={-0.0001}
          castShadow
        />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <OrbitControls />

        <Suspense fallback={null}>
          <group scale={0.1}>
            <SpecialKms
              cpid="Door_FA_4a"
              width={500}
              height={2200}
              depth={18}
              // frontDepth={3}
              // backDepth={3}
              // cutYPosition={0}
              doorPivot="left"
              doorOpening="in"
              handleSide="right"
              // handlerHeight={130}
              // is2D={false}
              // frameVariant="none"
              // debugEdges={false}
              position={[0, 0, 0]}
              materials={{
                doorMaterial: doorMaterial,
                // frontMaterial: "#eeeeee",
                // backMaterial: "#cccccc",
              }}
              handler={{
                cpid: "HL01",
                // xPosition: 0,
                // yPosition: 300,
                // zPosition: 0,
                // rotation: 0,
                // rotationX: 0,
                // rotationY: 0,
                // handlerHeight: 130,
                handlerMaterial: handlerMaterial,
              }}
              // doorCutsParam={{
              //   width: 40,
              //   numberOfCuts: 3,
              //   segmentWidth: 10,
              // }}
            />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
