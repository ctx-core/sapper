import { $page_type } from './page'
import { $session_type } from './session'
export type preload_type<T> = (page: $page_type, session: $session_type) => Promise<T>
