export interface MenuProps {
  actions?: Array<{
    id: number
    cam_id: number
    time_detected: string
    comment: string
    detection: string
    precision: string
    frame: string
  }>
  onActionClick: (id: number) => void
}
