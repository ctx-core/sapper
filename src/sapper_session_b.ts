import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const sapper_session_b:sapper_session_b_type = _b('sapper_session', ()=>
	writable(null) as sapper_session_type
)
export type $sapper_session_type = null|object
export interface sapper_session_type extends Writable<$sapper_session_type> {}
export type sapper_session_b_type = B<sapper_session_type>
export {
	sapper_session_b as b__session__sapper,
}
