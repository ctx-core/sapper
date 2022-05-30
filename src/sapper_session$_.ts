import { B, be_ } from '@ctx-core/object'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
export const sapper_session$_:B<sapper_session$_T> = be_('sapper_session$', ()=>
	atom_(undefined) as sapper_session$_T
)
export interface sapper_session$_T extends WritableAtom_<object|undefined> {}
