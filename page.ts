// TODO: Alias import { Page } from '@sapper/common' when
// https://github.com/sveltejs/sapper/pull/1468 is solved
export interface Page {
	host:$page_host_type
	path:$page_path_type
	params:$page_params_type
	query:$page_query_type
	error?:$page_error_type
}
export type $page_host_type = string
export type $page_path_type = string
export type PreloadPage = Page
export type $page_type = Page
export interface $page_params_type extends Record<string, string|number> {}
export interface $page_query_type extends Record<string, string|number|boolean> {}
export type $page_error_type = Error|undefined
