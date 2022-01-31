import { be_, B } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'sapper_preloading$'
export const sapper_preloading$_:B<sapper_preloading$_T> = be_(key, ()=>
	atom$(undefined) as sapper_preloading$_T
)
export type sapper_preloading$_T = WritableAtom$<object|undefined>
