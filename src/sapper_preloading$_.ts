import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
export const sapper_preloading$_:B<sapper_preloading$_T> = be_('sapper_preloading$', ()=>
	atom$(undefined) as sapper_preloading$_T
)
export type sapper_preloading$_T = WritableAtom$<object|undefined>
