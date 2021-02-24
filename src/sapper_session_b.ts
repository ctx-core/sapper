import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const sapper_session_b:sapper_session_b_T = _b('sapper_session', ()=>
	writable(null) as sapper_session_T
)
export type $sapper_session_T = null|object
export type $sapper_session_type = $sapper_session_T
export interface sapper_session_T extends Writable<$sapper_session_T> {}
export type sapper_session_type = sapper_session_T
export interface sapper_session_b_T extends B<sapper_session_T> {}
export type sapper_session_b_type = sapper_session_b_T
export {
	sapper_session_b as b__session__sapper,
}
