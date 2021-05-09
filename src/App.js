import './App.css';

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import TopHat from './components/TopHat';
import { OrbitControls } from '@react-three/drei';
import MagicStick from './components/MagicStick';
import Table from './components/Table';
import PrizeViewer from './components/PrizeViewer';
import useStore from './utils/store';
import Viewer from './components/Viewer';
import { getModels } from './utils/api';

function App() {
  
  const showPrize = useStore(state => state.showPrize);
  const reload = useStore(state => state.reload);

  const [models, setModels] = useState([]);
  
  useEffect(() => {
    getModels().then(res => {
      setModels(res.data);
    })
  }, [reload]);

  return (
    <div className="App">
      <PrizeViewer models={models} />
      <Suspense fallback={<></>}>
        <Canvas shadows>
          <ambientLight />
          <pointLight position={[10, 10, 10]} castShadow />
          <OrbitControls />
          <Table scale={3} position={[0, -5.25, 0]} />
          <MagicStick models={models} />
          <TopHat rotation={[0, 0, Math.PI]} />
          {showPrize && <Viewer scale={0.5} position={[0, 1, 0]} />}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
