import './App.css';

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "react-spring/three";
import TopHat from './components/TopHat';
import { OrbitControls } from '@react-three/drei';
import MagicStick from './components/MagicStick';
import Table from './components/Table';
import PrizeViewer from './components/PrizeViewer';

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current.rotation.y -= 0.01
    mesh.current.rotation.x = 10
  });

  const springProps = useSpring({
    position: props.over === true ? [0, 2, 0] : [0, 0, 0],
    scale: props.sizable ? (active ? 1.5 : 1) : 0.75
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <animated.mesh
      {...springProps}
      ref={mesh}
      onClick={(event) => {
        setActive(!active)
        if (props.updateRenderOver) {
          props.updateRenderOver();
        }
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </animated.mesh>
  )
}

function App() {
  return (
    <div className="App">
      <PrizeViewer />
      <Canvas gl={{ preserveDrawingBuffer: true }} shadows>
        <ambientLight />
        <pointLight position={[10, 10, 10]} castShadow />
        <OrbitControls />
        <Table scale={3} position={[0, -5.25, 0]}/>
        <MagicStick />
        <TopHat rotation={[0, 0, Math.PI]} />
      </Canvas>
    </div>
  );
}

export default App;
