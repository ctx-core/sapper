import type { be_derived_pair_T, be_writable_triple_T, Readable_, Writable_ } from '@ctx-core/svelte'
import type { PageContext, PageParams, Query } from '../_types'
export declare const [
	page$_,
	page_,
	page__set,
] = be_writable_triple_T<
	Writable_<PageContext>
>
export { page$_ as page__ }
export declare const [
	page__host$_,
	page__host_,
] = be_derived_pair_T<
	Readable_<string>
>
export { page__host$_ as page__host__ }
export declare const [
	page__path$_,
	page__path_,
] = be_derived_pair_T<
	Readable_<string>
>
export { page__path$_ as page__path__ }
export declare const [
	page__params$_,
	page__params_,
] = be_derived_pair_T<
	Readable_<PageParams>
>
export { page__params$_ as page__params__ }
export declare const [
	page__query$_,
	page__query_,
] = be_derived_pair_T<
	Readable_<Query>
>
export { page__query$_ as page__query__ }
export declare const [
	page__error$_,
	page__error_,
] = be_derived_pair_T<
	Readable_<Error>
>
export { page__error$_ as page__error__ }
