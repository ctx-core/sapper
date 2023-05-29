import { globalThis__be_ } from '@ctx-core/object'
import { be_writable_triple_, writable_ } from '@ctx-core/svelte'
export const [
	sapper_session$_,
	sapper_session_,
	sapper_session$__set,
] = be_writable_triple_('sapper_session$_', ()=>
		writable_(null),
	{ be_: globalThis__be_ })
export { sapper_session$_ as sapper_session__ }
