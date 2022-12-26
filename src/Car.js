import React, {useEffect} from 'react'
import {useLoader } from '@react-three/fiber';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {Mesh} from 'three'


const Car = ({}) => {
    
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "models/car/scene.gltf"
      );

    useEffect(() => {
        // scaling down the model to fit the scene
        gltf.scene.scale.set(0.005, 0.005, 0.005);
        gltf.scene.position.set(0, -0.035, 0);
        // references all the childer of the object to make sure they can cast and revieve shadows
        gltf.scene.traverse((object) => {
            if(object instanceof Mesh) {
                object.castShadow = true;
                object.recieveShadow = true;
                object.material.envMapIntesisty = 20;
            }
        });
    }, [gltf])

    // injecting into the scene 
     return <primitive object={gltf.scene} />;
}

export default Car