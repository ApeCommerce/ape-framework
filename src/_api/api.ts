import { OpenAPI } from 'openapi-types'

export interface Api {
  start: () => Promise<void>,
  close: () => Promise<void>,
  getUrl: () => string,
  doc: () => OpenAPI.Document,
}
