import { be_, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'sapper_session$'
export const sapper_session$_b:B<sapper_session$_T> = be_(key, ()=>
	writable$(undefined) as sapper_session$_T
)
export interface sapper_session$_T extends Writable$<object|undefined> {}
export {
	sapper_session$_b as b__session__sapper,
}
