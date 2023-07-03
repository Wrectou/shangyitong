import request from "@/api/request"

const getRequest = (url: string, params?: object) => {
  return request.get(`${url}`, { params })
}

// 医院分页列表
export const getHospitalList = (page:number, limit: number, params: object) => getRequest(`/hosp/hospital/${page}/${limit}`, params)

// 获取医院等级
export const getHospitalLevel = (dictCode: string) => getRequest(`/cmn/dict/findByDictCode/${dictCode}`)