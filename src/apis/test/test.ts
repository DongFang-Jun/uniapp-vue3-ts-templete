import { GET } from '@/utils/request'
import { INTERFACE_URL } from '@/libs/interface'
import type { testApiType } from '@/types/test/test'

/*测试接口*/
export const testApi = (params?: testApiType) => {
  return GET(INTERFACE_URL.testApi, params)
}
