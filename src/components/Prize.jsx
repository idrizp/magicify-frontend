import React from 'react'
import useStore from '../utils/store';
import style from "./css/Prize.module.css";

export default function Prize({ image, name, id }) {
	const selected = useStore(state => state.id);
	return (
		<li className={`${style.container} ${selected && selected === id ? style.selected : ""}`}>
			<img src={`${process.env.REACT_APP_API_HOST}${image}`} alt="panda" />
			<p>{name}</p>
		</li>
	)
}
