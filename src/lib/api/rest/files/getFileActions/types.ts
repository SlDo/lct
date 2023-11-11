export interface GetFileActionsRequest {
  file_id: number
}

export interface GetFileActionsResponse {
  actions: Array<{
    id: number
    video_id: number
    time_detected: string
    comment: string
    detection: string
    precision: number
    frame: string
  }>
}
