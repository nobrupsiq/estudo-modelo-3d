import { Computer } from "./Computer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="h-dvh">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={3} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Computer scale={0.4} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default App;
