import React, { useEffect, useState } from 'react'
import Panda from "../icons/panda.svg";
import Tiger from "../icons/tiger.svg";
import { getModels } from '../utils/api';
import style from "./css/PrizeViewer.module.css";
import ModelCreator from './ModelCreator';
import Prize from './Prize';

export default function PrizeViewer({ models }) {
	const [showCreator, setShowCreator] = useState(false);
	return (
		<div className={style.container}>
			<ul className={style.list}>
				{ models.map(model => <Prize key={model.id} name={model.name} model={model.modelPath} image={model.iconPath} id={model.id} />)}
			</ul>
			<button className={style.addModel} onClick={() => setShowCreator(!showCreator)}>Add your own model</button>
			{ showCreator && <ModelCreator hide={() => setShowCreator(false)} /> }
		</div>
	)
}
