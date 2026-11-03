

import { CharacterDetailResponse } from './character-detail-response'

export interface CharacterListResponse {
  info: Info
  results: CharacterDetailResponse[]
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}