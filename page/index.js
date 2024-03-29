import { be_readable_pair_, be_writable_triple_, derived_, writable_ } from '@ctx-core/svelte'
import { globalThis__be_ } from 'ctx-core/be'
export const [
	page$_,
	page_,
	page__set,
] = be_writable_triple_(
	globalThis__be_(()=>
		writable_(null),
	{ id: 'page' }))
export { page$_ as page__ }
export const [
	page__host$_,
	page__host_,
] = be_readable_pair_(
	globalThis__be_(ctx=>
		derived_(page$_(ctx), page=>
			page ? page.host : null
		), { id: 'page__host' }))
export { page__host$_ as page__host__ }
export const [
	page__path$_,
	page__path_,
] = be_readable_pair_(
	globalThis__be_(ctx=>
		derived_(page$_(ctx), page=>
			page ? page.path : null
		), { id: 'page__path' }))
export { page__path$_ as page__path__ }
export const [
	page__params$_,
	page__params_
] = be_readable_pair_(
	globalThis__be_(ctx=>
		derived_(page$_(ctx), page=>
			page ? page.params : null
		), { id: 'page__params' }))
export { page__params$_ as page__params__ }
export const [
	page__query$_,
	page__query_,
] = be_readable_pair_(
	globalThis__be_(ctx=>
		derived_(page$_(ctx), page=>
			page ? page.query : null
		), { id: 'page__query' }))
export { page__query$_ as page__query__ }
export const [
	page__error$_,
	page__error_,
] = be_readable_pair_(
	globalThis__be_(ctx=>
		derived_(page$_(ctx), page=>
			page ? page.error : null
		), { id: 'page__error' }))
export { page__error$_ as page__error__ }
