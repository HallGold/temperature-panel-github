import service from '@/utils/axios'

/* 获取天气 */
export function getWeather(params) {
  return service({
    url: '/weather_mini',
    method: 'get',
    params: params,
    baseURL: 'http://wthrcdn.etouch.cn'
  })
}
