import React, { useEffect, useRef } from 'react'
import styles from '../styles/Scene3D.module.scss'
import { Canvas, useFrame, useLoader} from '@react-three/fiber';
import {
	OrbitControls,
	Stars,
	PerspectiveCamera,
    Sky 
} from '@react-three/drei';
import icon from '../../../public/icon.png';
import * as THREE from 'three';

const Scene3D = () => {

    

  return (
		<div className={styles.canvas}>
			<Canvas>
				<PerspectiveCamera
					makeDefault
					position={[0, 1, 5]}
					fov={20}
					lookAt={Box}
				/>
				<Stars />
				{/* <OrbitControls /> */}
				<spotLight position={[2, 4, 4]} angle={30} />
				<ambientLight intensity={0.1} />
				<Box />
			</Canvas>
		</div>
	);
}

const Box = () => {
    const boxRef = useRef<THREE.Mesh>(null);
    let deltay = true
    useFrame(() => {
        if (!boxRef.current) {
            return;
        }
        
        boxRef.current.rotation.y += 0.01;
        if (deltay) {
            boxRef.current.position.y += 0.005;
            
        }
        else {
            boxRef.current.position.y -= 0.005;

        }
        if ((boxRef.current.position.y >= 1.2)) {
					deltay = false;
                    boxRef.current.position.y = 1.19;
		} else if ((boxRef.current.position.y <= 0.75)) {
					deltay = true;
                    boxRef.current.position.y = 0.76;
		}
    })

   const texture = useLoader(THREE.TextureLoader, icon);
    

    return (
			<mesh ref={boxRef} position={[0, 1, 0]}>
				<boxGeometry attach="geometry" />
				<meshStandardMaterial attach="material" map={texture} />
			</mesh>
		);
}

export default Scene3D