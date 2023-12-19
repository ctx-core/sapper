import { be_writable_triple_, writable_ } from '@ctx-core/svelte'
import { globalThis__be_ } from 'ctx-core/be'
export const [
	sapper_session$_,
	sapper_session_,
	sapper_session$__set,
] = be_writable_triple_(globalThis__be_(
	()=>writable_(null),
	{ id: 'sapper_session' }))
export { sapper_session$_ as sapper_session__ }
