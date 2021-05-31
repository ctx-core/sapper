import { be_, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { sapper_Ctx } from './sapper_Ctx'
const key = 'sapper_session'
export const sapper_session_b:B<sapper_Ctx, typeof key> = be_(key, ()=>
	writable$(undefined) as sapper_session_T
)
export type $sapper_session_T = undefined|object
export interface sapper_session_T extends Writable$<$sapper_session_T> {}
export {
	sapper_session_b as b__session__sapper,
}
