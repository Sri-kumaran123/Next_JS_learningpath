"use client";
import React,{useRef} from "react";

import { Canvas, useFrame,useLoader } from "@react-three/fiber";
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import { Content } from "next/font/google";
import { OrbitControls } from "@react-three/drei";

export default function ThreeModule(){
    const t={
        height:"100vh",
        
    }

    return(
        <div style={t}>
            <Canvas>
                <OrbitControls/>
                <ambientLight intensity={2}/>
                <directionalLight position={[2,1,1]}/>
                <Cube/>
            </Canvas>
        </div>
    )
}
function Cube(){
    const mesh=useRef(null);
    useFrame((state,delta)=>{
        mesh.current.rotation.x+=delta*0.1;
        mesh.current.rotation.y+=delta*0.1;
        mesh.current.rotation.z+=delta*0.1;
    }
    )
    const texture_1=useLoader(TextureLoader,"1.jpg");
    
    return(
        <mesh ref={mesh}>
            <boxGeometry args={[3.5,3.5,3.5]} />
            <meshStandardMaterial map={texture_1}/>
        </mesh>
    )
}