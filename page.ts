// TODO: Alias import { Page } from '@sapper/common' when
// https://github.com/sveltejs/sapper/pull/1468 is solved
export interface Page {
	host: $host_type
	path: $path_type
	params: $params_type
	query: $query_type
	error?: $error_type
}
export type $host_type = string
export type $path_type = string
export type PreloadPage = Page
export type $page_type = Page
export interface $params_type extends Record<string, string> {}
export interface $query_type extends Record<string, string|string[]> {}
export type $error_type = Error|undefined
