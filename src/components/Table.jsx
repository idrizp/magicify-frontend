import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Table(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/table.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table.geometry}
        material={materials.Material}
        position={[0, 1.38, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg.geometry}
        material={materials['Material.002']}
        position={[1.13, 0.62, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Support.geometry}
        material={materials['Material.001']}
        position={[0, 1.29, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/table.glb')

