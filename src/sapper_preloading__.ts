import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const sapper_preloading__ = be_<WritableAtom_<object|undefined>>('sapper_preloading__', ()=>
	atom_(undefined)
)
export { sapper_preloading__ as sapper_preloading$_ }
