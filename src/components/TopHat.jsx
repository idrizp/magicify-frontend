
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TopHat(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/top_hat.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('./models/top_hat.gltf');