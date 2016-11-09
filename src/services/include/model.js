/**
 * @class a common model for correspond with server side
 * @description I use Promise to handle async 
 * @author maoyiwei
 */

class Model {

	/**
	 * @description constructor function
	 * @param  {object}
	 */
	constructor(data) {
		this.data = data;
	}

	/**
	 * @description set or update the data of these Model
	 * @param {object} the data of the Model
	 */
	setData(data) {
		this.data = data;
	}

	/**
	 * @description get the data
	 * @return {object} the data of the Model
	 */
	getData() {
		return this.data;
	}

	create(url) {
		return new Promise((resolve, reject) => {

		});
	}

	static loadModelList(url, pageNum, pageSize) {
		return new Promise((resolve, reject) => {

		});
	}

	loadModelByData(url) {
		return new Promise((resolve, reject) => {

		});
	}

	updateModelByData(url) {
		return new Promise((resolve, reject) => {

		});
	}

	deleteModelByData(url) {
		return new Promise((resolve, reject) => {

		});
	}

}

export default Model