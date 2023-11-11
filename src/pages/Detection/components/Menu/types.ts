export interface MenuProps {
  actions?: Array<{
    id: number
    video_id: number
    time_detected: string
    comment: string
    detection: string
    precision: number
    frame: string
  }>
  onActionClick: (id: number) => void
}
