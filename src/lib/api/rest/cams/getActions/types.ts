export interface GetActionsRequest {
  cam_id: number
}

export interface GetActionsResponse {
  actions: Array<{
    id: number
    cam_id: number
    time_detected: string
    comment: string
    detection: string
    precision: string
    frame: string
  }>
}
