import React from 'react'
import Panda from "../icons/panda.svg";
import Tiger from "../icons/tiger.svg";
import style from "./css/PrizeViewer.module.css";

export default function PrizeViewer() {
	return (
		<div className={style.container}>
			<ul className={style.list}>
				<li>
					<img src={Panda} alt="panda" />
					<p>Panda</p>
				</li>
				<li>
					<img src={Tiger} alt="tiger" />
					<p>Tiger</p>
				</li>
				<li>
					<img src={Panda} alt="panda" />
					<p>Rabbit</p>
				</li>
			</ul>
		</div>
	)
}
