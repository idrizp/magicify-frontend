
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

export default function MagicStick(props) {
	const group = useRef()

	const [active, setActive] = useState(false);
	const { nodes, materials } = useGLTF('./models/magic_stick.gltf');

	useEffect(() => {
		if (active) {
			setTimeout(() => {
				setActive(false);
				// TODO: show prize
			}, 2000);
		}
	}, [active]);

	let counter = 0;
	useFrame((delta) => {
		counter+=0.06;
		const curr = group.current;
		if (active) {
			if (curr.position.x !== 0) {
				curr.position.x = 0;
				curr.position.y = 2.3;
				curr.position.z = 0;
				return;
			}
			curr.rotation.z = Math.cos(counter);
			curr.rotation.x = Math.sin(counter);
		} else {
			curr.rotation.x = Math.PI / 2;
			curr.rotation.y = 0;
			curr.rotation.z = 0;
			curr.position.x = 1.25;
			curr.position.y = -0.9;
			curr.position.z = 0;
		}
	})

	return (
		<Suspense fallback={null}>
			<animated.group ref={group} {...props} dispose={null}
				scale={0.3} 
				rotation={[Math.PI/2, 0,0]} 
				position={[1.25, -0.9, 0]}
				onClick={() => setActive(!active)}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Body.geometry}
					material={materials['Material.001']}
					scale={[0.2, 3.3, 0.2]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Top.geometry}
					material={materials['Material.002']}
					scale={[0.2, 3.3, 0.2]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Bottom.geometry}
					material={materials['Material.003']}
					scale={[0.2, 3.3, 0.2]}
				/>
			</animated.group>
		</Suspense>
	)
}

useGLTF.preload('./models/magic_stick.gltf')

