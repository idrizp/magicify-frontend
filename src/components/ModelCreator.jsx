import React, { useState } from 'react'
import { createModel } from '../utils/api';
import useStore from '../utils/store';
import style from "./css/ModelCreator.module.css";

export default function ModelCreator({ hide }) {
	const reload = useStore(state => state.reload);

	const [name, setName] = useState(null);
	const [iconFile, setIconFile] = useState(null);
	const [modelFile, setModelFile] = useState(null);

	const submit = (e) => {
		e.preventDefault();
		if (!iconFile) {
			return;
		}
		if (!modelFile) {
			return;
		}
		if (!name) {
			return;
		}
		createModel(name, iconFile, modelFile).then(res => {
			useStore.setState({ reload: !reload });
			hide();
		}).catch(err => {
			alert("Something went wrong when creating your model.");
			throw err;
		})
	}
	return (
		<div className={style.container}>
			<p>Name</p>
			<input type="text" name="Name" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
			<p>Icon</p>
			<input type="file" name="Icon" id="icon" accept="image/png, image/svg+xml" max="1" onChange={(e) => setIconFile(e.target.files[0])} />
			<p>Model</p>
			<input type="file" name="Model" id="model" accept="model/gltf+json, model/gltf-binary" max="1" onChange={(e) => setModelFile(e.target.files[0])} />

			<button onClick={submit}>Submit</button>
		</div>
	)
}
