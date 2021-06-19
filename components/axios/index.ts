import { KeycapAxiosInstance } from './config'
import Message from '../message/message'

export enum RequestMethod {
  POST = 'POST',
  GET = 'GET',
  FILE = 'FILE'
}

export class keycap {
  static api: (
    method: RequestMethod,
    url: string,
    params?: {},
    authorization?: boolean,
    showMsg?: boolean,
  ) => Promise<any>
}

keycap.api = async function (
  method: string,
  url: string,
  params?: any,
  authorization?: boolean,
  showMsg: boolean = true
): Promise<any> {
  switch (method) {
    case RequestMethod.POST:
      return await KeycapAxiosInstance.post(
        url,
        JSON.stringify(params),
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: authorization ? localStorage.getItem('Authorization') : ''
          }
        }
      ).then((res) => {
        return parseResponse(showMsg, res)
      })

    case RequestMethod.FILE:
      return await KeycapAxiosInstance.post(
        url,
        params,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: authorization ? localStorage.getItem('Authorization') : ''
          }
        }
      ).then((res) => {
        return parseResponse(showMsg, res)
      })

    case RequestMethod.GET:
      return await KeycapAxiosInstance.get(
        url,
        {
          headers: {
            Authorization: authorization ? localStorage.getItem('Authorization') : ''
          }
        }
      ).then((res) => {
        return parseResponse(showMsg, res)
      })

    default:
      return null
  }
}

const parseResponse = (showMsg: boolean, res: any) => {
  const baseResponse = JSON.parse(JSON.stringify(res))
  if (baseResponse.code === '200') {
    if (showMsg) {
      Message.success(baseResponse.msg)
    }
    return baseResponse
  } else {
    Message.error(baseResponse.msg)
  }
}
