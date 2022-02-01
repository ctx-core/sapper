import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
export const sapper_session$_:B<sapper_session$_T> = be_('sapper_session$', ()=>
	atom$(undefined) as sapper_session$_T
)
export interface sapper_session$_T extends WritableAtom$<object|undefined> {}
