import { type HTTPMethods } from '@lib/http/constants'

export interface UseRequestData {
  url: string
  baseUrl: string
  method: HTTPMethods
}

export interface UseRequestOptions {
  runOnMount?: boolean
  errorHandler?: (error: any) => void
}
