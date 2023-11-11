// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MapProps {
  placemarks?: Array<{
    id: number
    address: string
    longitude: number
    latitude: number
    status: string
  }>
}
