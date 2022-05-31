import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const sapper_session__:B<WritableAtom_<object|null>> = be_('sapper_session__', ()=>
	atom_(null) as WritableAtom_<object|null>)
