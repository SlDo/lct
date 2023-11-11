export interface GetCamRequest {
  cam_id: string
}

export interface GetCamResponse {
  id: number
  address: string
  longitude: number
  latitude: number
}
