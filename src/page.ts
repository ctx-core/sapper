// TODO: Alias import { PageContext } from '@sapper/common' when
// https://github.com/sveltejs/sapper/issues/1745 is solved
export interface PageContext {
	host:string
	path:string
	params:PageParams
	query:Query
	error?:Error
}
export type {
	PageContext as Page
}
export type page_T = PageContext
export type PageParams = Record<string, string>
export type Query = Record<string, string | string[]>
