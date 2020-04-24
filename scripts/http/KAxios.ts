import Axios from 'axios';
import { BaseResponse } from '../common/BaseResponse';
import { KApi } from './KApi';
import { KUrl } from './KUrl';

const instance = Axios.create({
	timeout: 2000,
});

export class KAxios {
	static doGet: (url: KUrl, api: KApi, param: any) => Promise<BaseResponse>;
	static doStringGet: (url: KUrl, api: KApi, param: any) => Promise<string>;
}

function parseGetParam(param: any): string {
	let paramStr = '';
	if (param != null) {
		paramStr = '?';
		for (const paramKey in param) {
			const value = param[paramKey];
			if (!(value instanceof Object)) {
				paramStr = paramStr.concat(paramKey).concat('=').concat(value);
			}
		}
	}
	return paramStr;
}

KAxios.doStringGet = async function doStringGet(
	url: KUrl,
	api: KApi,
	param: {},
): Promise<string> {
	let back: string = '';
	await instance
		.get(url.concat(api).concat(parseGetParam(param)))
		.then(function (response) {
			back = response.data;
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {});
	return back;
};

KAxios.doGet = async function doGet(
	url: KUrl,
	api: KApi,
	param: {},
): Promise<BaseResponse> {
	let back: BaseResponse = new BaseResponse();
	await instance
		.get(url.concat(api).concat(parseGetParam(param)))
		.then(function (response) {
			back = response.data;
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {});
	return back;
};
