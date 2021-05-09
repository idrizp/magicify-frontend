import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react"
import useStore from "../utils/store"

export default function Viewer(props) {
	const scene = useStore((store) => store.scene)
	useEffect(() => {
		if (!scene) return;
		scene.traverse((obj) => {
			if (obj.isMesh) {
				obj.material.envMapIntensity = 0.8
			}
		})
	}, [scene])

	if (!scene) return <></>;
	return (
		<>
			<ambientLight intensity={0.25} />
			<Suspense fallback={<></>}>
				<primitive {...props} object={scene} />
			</Suspense>
		</>
	)
}