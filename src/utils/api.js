import axios from "axios";

export async function downloadModel(modelPath) {
	try {
		const result = await axios.get(`${process.env.REACT_APP_API_HOST}${modelPath}`, { responseType: "arraybuffer" });
		const buffer = result.data;
		return buffer;
	} catch (error) {
		throw error;
	}
}

export async function getModels() {
	return axios.get(`${process.env.REACT_APP_API_HOST}/`);
}

export async function createModel(name, iconFile, modelFile) {
	const formData = new FormData();
	formData.append("name", name);
	formData.append("icon", iconFile);
	formData.append("model", modelFile);
	console.log(formData);
	return axios.post(`${process.env.REACT_APP_API_HOST}/`, formData);
}