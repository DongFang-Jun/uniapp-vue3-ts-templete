import { ROOT_URL } from '@/libs/config'
import qs from 'qs'
// @ts-ignore
import RequestOptions = UniNamespace.RequestOptions

let root = ''

switch (import.meta.env.VITE_NODE_ENV) {
  case 'test':
    root = ROOT_URL.test
    break
  case 'production':
    root = ROOT_URL.prod
    break

  default:
    root = ROOT_URL.dev
    break
}

export const REQUEST = (url: string, method = 'GET', params?: any): Promise<any> => {
  let data = {}
  let link = `${root}${url}`

  if (method === 'GET') {
    link = `${link}?${qs.stringify(params)}`
  } else {
    data = params
  }

  const type = uni.getSystemInfoSync().uniPlatform
  let header = {
    project: type
  }

  return new Promise((resolve, reject) => {
    uni.request({
      url: link,
      method: method as RequestOptions['method'],
      data,
      header,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export const GET = (url: string, params?: any) => {
  return REQUEST(url, 'GET', params)
}

export const POST = (url: string, params?: any) => {
  return REQUEST(url, 'GET', params)
}
