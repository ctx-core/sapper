import { be_derived_pair_, be_writable_triple_, derived_, writable_ } from '@ctx-core/svelte'
export const [
	page$_,
	page_,
	page$__set,
] = be_writable_triple_('page$_', ()=>
	writable_(null))
export { page$_ as page__ }
export const [
	page__host$_,
	page__host_,
] = be_derived_pair_('page__host$_', ctx=>
	derived_(page$_(ctx), page=>
		page
		? page.host
		: null))
export { page__host$_ as page__host__ }
export const [
	page__path$_,
	page__path_,
] = be_derived_pair_('page__path$_', ctx=>
	derived_(page$_(ctx), page=>
		page
		? page.path
		: null))
export { page__path$_ as page__path__ }
export const [
	page__params$_,
	page__params_
] = be_derived_pair_('page__params$_', ctx=>
	derived_(page$_(ctx), page=>
		page
		? page.params
		: null))
export { page__params$_ as page__params__ }
export const [
	page__query$_,
	page__query_,
] = be_derived_pair_('page__query$_', ctx=>
	derived_(page$_(ctx),
		page=>
			page
			? page.query
			: null))
export { page__query$_ as page__query__ }
export const [
	page__error$_,
	page__error_,
] = be_derived_pair_('page__error$_', ctx=>
	derived_(page$_(ctx), page=>
		page
		? page.error
		: null))
export { page__error$_ as page__error__ }
