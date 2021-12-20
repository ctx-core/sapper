import { be_, B } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'sapper_session$'
export const sapper_session$_b:B<sapper_session$_T> = be_(key, ()=>
	atom$(undefined) as sapper_session$_T
)
export interface sapper_session$_T extends WritableAtom$<object|undefined> {}
export {
	sapper_session$_b as b__session__sapper,
}
