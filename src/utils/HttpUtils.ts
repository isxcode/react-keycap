// import Axios, { AxiosResponse } from 'axios';
// import { BaseResponse } from '../common/BaseResponse';
//
// // 感觉ts的强类型没有java好转对象
//
// export class http{
// 	static get: (url: string) => BaseResponse;
// }
//
// // 通过promise进行异步调用接口
// http.get = function (url: string): BaseResponse {
// 	return new Promise((resolve, reject) => {
// 		Axios.get(url).then(function (response: AxiosResponse<BaseResponse>) {
// 			resolve(response.data);
// 		});
// 	});
// };
//
// export default http;
