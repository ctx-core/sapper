import type { Writable } from '@ctx-core/store'
export type PreloadSession = Record<string, any>
export type $session_type = PreloadSession
export type session_type = Writable<$session_type>
