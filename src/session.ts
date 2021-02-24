import type { Writable } from '@ctx-core/store'
export interface PreloadSession extends Record<string, any> {}
export type $session_T = PreloadSession
export type $session_type = $session_T
export interface session_T extends Writable<$session_T> {}
export type session_type = session_T
