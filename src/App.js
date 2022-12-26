import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import "./style.css"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Ground from "./Ground"

function CarShow(){
  return (
    <>
    {/* moves camera */}
    <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>
    {/* camera itself field of view and the default */}
    <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>

{/* without react-three/fiber */}
    {/* let color = new Color(0,0,0); */}
    <color args={[0,0,0]} attach="background"/>

{/* without react-three/fiber */}
    {/* let spotlight = new Spotlight();
    spotlight.intensity = 1.5;
    spotlight.position.set(...)
     */}

     <spotLight
      color={[1, 0.25, 0.7]}
      intensity={1.5}
      angle={0.6}
      penumbra={0.5}
      position={[5,5,0]}
      castShadow
      shadow-bias={-0.0001}
     />

     <spotLight
     color={[0.14, 0.5, 1]}
     intensity={2}
     angle={0.6}
     penumbra={0.5}
     postion={[-5, 5, 0]}
     castShadow
     shadow-bias={-0.0001}
     />

    {/* <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshBasicMaterial color={'green'}/>
    </mesh> */}
    <Ground/>
    </>
  )
}

function App(){
  return(
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  )
}

export default App;
