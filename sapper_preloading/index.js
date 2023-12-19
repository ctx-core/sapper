import { be_writable_triple_, writable_ } from '@ctx-core/svelte'
import { globalThis__be_ } from 'ctx-core/be'
export const [
	sapper_preloading$_,
	sapper_preloading_,
	sapper_preloading$__set,
] = be_writable_triple_(globalThis__be_(
	()=>writable_(undefined),
	{ id:'sapper_preloading' }))
export {
	sapper_preloading$_ as sapper_preloading__,
}

