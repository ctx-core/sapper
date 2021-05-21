import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'sapper_session'
export interface sapper_session_ctx_I {
	sapper_session?:sapper_session_T
}
export const sapper_session_b = _b<sapper_session_ctx_I, typeof key>(key, ()=>
	writable$(undefined) as sapper_session_T
)
export type $sapper_session_T = undefined|object
export interface sapper_session_T extends Writable$<$sapper_session_T> {}
export {
	sapper_session_b as b__session__sapper,
}
