// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllCamsRequest {}

export interface GetAllCamsResponse {
  count: number
  cams: Array<{
    id: number
    address: string
    longitude: number
    latitude: number
    status: string
  }>
}
