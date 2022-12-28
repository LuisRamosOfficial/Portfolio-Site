/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from '../styles/Scene3D.module.scss'
import { Canvas, useFrame, useLoader} from '@react-three/fiber';
import {
	Stars,
	PerspectiveCamera,
} from '@react-three/drei';
import icon from '../../icon.png';
import * as THREE from 'three';

interface Props {
	scroll?: any;
}


const Scene3D: FC<Props> = ({scroll}) => {
	const [Widescreen, setWidescreen] = useState<boolean>(true)

	useEffect(() => {
		const width = window.innerWidth
		console.log(width)
		if (width < 700) {
			setWidescreen(false)
		}

	}, [])
    

  return (
		<div className={styles.canvas}>
			<Canvas>
				<PerspectiveCamera
					makeDefault
					position={Widescreen ? [0, 1, 5] : [0, 1, 7]}
					fov={20}
					lookAt={Box}
				/>
				<Stars />
				{/* <OrbitControls /> */}
				<spotLight
					position={[-2, 4, 4]}
					intensity={0.05}
					angle={10}
					color={'cyan'}
				/>
				<ambientLight intensity={0.05} />
				<spotLight position={[0, 4, 4]} intensity={0.8} angle={30} />
				<spotLight
					position={[2, 4, 4]}
					intensity={0.3}
					angle={30}
					color={'purple'}
				/>
				<Box scroll={scroll} />
			</Canvas>
		</div>
	);
}


const Box: FC<Props> = ({scroll}) => {
    const boxRef = useRef<THREE.Mesh>(null);
    let deltay = true
    useFrame(() => {
        if (!boxRef.current) {
            return;
        }
		if (!scroll.current) {
			return
		}
        const t = scroll.current.getBoundingClientRect().top;
		
		boxRef.current.position.x = t * -0.01
        boxRef.current.rotation.y += 0.01 + (t * -0.0005);
        if (deltay) {
            boxRef.current.position.y += 0.005;
            
        }
        else {
            boxRef.current.position.y -= 0.005;

        }
        if (boxRef.current.position.y >= 1.2 - (t * -0.0005)) {
					deltay = false;
					boxRef.current.position.y = 1.19 - t * -0.0005;
				} else if (boxRef.current.position.y <= 0.75 - t * -0.0005) {
					deltay = true;
					boxRef.current.position.y = 0.76 - t * -0.0005;
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