// TODO: Alias import { Page } from '@sapper/common' when
// https://github.com/sveltejs/sapper/pull/1468 is solved
export interface Page {
	host:$page_host_T
	path:$page_path_T
	params:$page_params_T
	query:$page_query_T
	error?:$page_error_T
}
export type $page_host_T = string
export type $page_host_type = $page_host_T
export type $page_path_T = string
export type $page_path_type = $page_path_T
export type PreloadPage = Page
export type $page_T = Page
export type $page_type = $page_T
export interface $page_params_T extends Record<string, string|number> {}
export type $page_params_type = $page_params_T
export interface $page_query_T extends Record<string, string|number|boolean> {}
export type $page_query_type = $page_query_T
export type $page_error_T = Error|undefined
export type $page_error_type = $page_error_T
