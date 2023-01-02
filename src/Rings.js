import React ,{useRef} from 'react'
//positions rings being created 
import {useFrame} from "@react-three/fiber"
import { Color } from 'three'
const Rings = () => {
    //all the elements
    const itemsRef = useRef([])
    const fourteenRings = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    //runs everytime theres a new frame to render ie. 60 frames/sec
    //useful when animating
    useFrame((state) => {
        for(let i = 0; i < itemsRef.current.length; i++){
            let elapsed = state.clock.getElapsedTime();

    for (let i = 0; i < itemsRef.current.length; i++) {
        //reference to each ring
      let mesh = itemsRef.current[i];
    //   position of ring at any given time
      let z = (i - 7) * 3.5 + ((elapsed * 0.4) % 3.5) * 2;
      //distnace of ring from center
      let dist = Math.abs(z);
      mesh.position.set(0, 0, -z);
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04);

      let colorScale = 1;
      if (dist > 2) {
        colorScale = 1 - (Math.min(dist, 12) - 2) / 10;
      }
      colorScale *= 0.5;

      if (i % 2 === 1) {
        mesh.material.emissive = new Color(6, 0.15, 0.7)//.multiplyScalar(colorScale);
      } else {
        mesh.material.emissive = new Color(0.1, 0.7, 3)//.multiplyScalar(colorScale);
      }
    }
}
    })

    return (
     <>
        {fourteenRings.map((v, i) => {
    return(
        <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        key={i}
        ref={(el) => (itemsRef.current[i] = el)}
        >
        <torusGeometry args={[3.35, 0.05, 16, 100]}/>
        <meshStandardMaterial emissive={[0.5,0.5,0.5]} color={[1,1,1]}/>
        </mesh>
       )
       })} 
    </>
    )
};

export default Rings

