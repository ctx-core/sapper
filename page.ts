import type { Writable } from '@ctx-core/store'
// TODO: Alias import { Page } from '@sapper/common' when
// https://github.com/sveltejs/sapper/pull/1468 is solved
export interface Page {
	host: string;
	path: string;
	params: params_type;
	query: query_type;
	error?: error_type;
}
export type PreloadPage = Page
export type $page_type = Page;
export type page_type = Writable<$page_type>
export type params_type = Record<string, string>
export type query_type = Record<string, string|string[]>
export type error_type = Error
