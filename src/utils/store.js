import create from 'zustand'
import { GLTFLoader, DRACOLoader, MeshoptDecoder } from 'three-stdlib'

const gltfLoader = new GLTFLoader()
const dracoloader = new DRACOLoader()
dracoloader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
gltfLoader.setDRACOLoader(dracoloader)
gltfLoader.setMeshoptDecoder(MeshoptDecoder)

const useStore = create((set, get) => ({
  buffer: null,
  scene: null,
  showPrize: false,
  reload: false,
  id: null,
  generateScene: async () => {
    const { buffer } = get()
    const result = await new Promise((resolve, reject) => gltfLoader.parse(buffer, '', resolve, reject))
	set({ scene: result.scene });
  },
}))

export default useStore