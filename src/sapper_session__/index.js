import { be_writable_triple_, writable_ } from '@ctx-core/svelte'
export const [
	sapper_session$_,
	sapper_session_,
	sapper_session$__set,
] = be_writable_triple_(()=>
	writable_(null))
export { sapper_session$_ as sapper_session__ }
