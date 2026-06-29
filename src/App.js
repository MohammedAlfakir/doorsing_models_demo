import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SpecialKms } from "@oak-some/special-kms";

function App() {
  const doorMaterial = React.useMemo(() => {
    const texture = new THREE.TextureLoader().load(
      "https://imagedelivery.net/aYYmWUcv7lRhpLdU4ojPsA/copy_2%2FUN_0H266_V1A.jpg/public",
    );
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.8,
      // metalness: 0.1,
    });
  }, []);

  const handlerMaterial = React.useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        // roughness: 0.2,
        // metalness: 0.5,
      }),
    [],
  );

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 0, 300], fov: 50 }} shadows>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[100, 200, 150]}
          intensity={2}
          shadow-bias={-0.0001}
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={10}
          shadow-camera-far={600}
          shadow-camera-left={-200}
          shadow-camera-right={200}
          shadow-camera-top={300}
          shadow-camera-bottom={-100}
          castShadow
        />
        <directionalLight position={[-100, 50, -100]} intensity={0.4} />
        <OrbitControls />

        <Suspense fallback={null}>
          <group scale={0.1}>
            <SpecialKms
              cpid="Door_FA_8"
              width={500}
              height={2200}
              depth={18}
              frontDepth={10}
              backDepth={10}
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
                cpid: "NONE",
                xPosition: 240,
                // yPosition: 300,
                // zPosition: 0,
                // rotation: 0,
                // rotationX: 0,
                // rotationY: 0,
                // handlerHeight: 130,
                handlerMaterial: handlerMaterial,
                // secondCutHeight: 50,
              }}
              // doorCutsParam={{
              //   width: 40,
              //   numberOfCuts: 3,
              //   segmentWidth: 10,
              // }}

              edgeLine={{
                enabled: true,
                color: "#000000",
                opacity: 0.5,
                lineWidth: 2,
              }}
              shadow={true}
            />
          </group>
        </Suspense>

        {/* Shadow-receiving floor plane */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -110, 0]}
          receiveShadow
        >
          <planeGeometry args={[600, 600]} />
          <shadowMaterial opacity={0.35} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
