// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddFileRequest {
  file: File
}

export interface AddFileResponse {
  id: number
  video_file_path: string
  user_id: number
}
