import { _b, assign } from '@ctx-core/object'
import { _readable_set_ctx, Readable, Unsubscriber } from '@ctx-core/store'
import type {
	$page_type, $page_host_type, $page_path_type, $page_params_type, $page_query_type, $page_error_type
} from './page'
export function _page_b<C extends object = object>(ctx:C) {
	return _b('_page_ctx', ()=>{
		let page:page_type, unsubscribe:Unsubscriber
		const { store: host, set: set_host } = _readable_set_ctx<$page_host_type>(null)
		const { store: path, set: set_path } = _readable_set_ctx<$page_path_type>(null)
		const { store: params, set: set_params } = _readable_set_ctx<$page_params_type>(null)
		const { store: query, set: set_query } = _readable_set_ctx<$page_query_type>(null)
		const { store: error, set: set_error } = _readable_set_ctx<$page_error_type>(null)
		return assign(_page, {
			set, host, path, params, query, error,
		}) as unknown as _page_type
		function set(in_page:page_type) {
			if (unsubscribe) {
				unsubscribe()
			}
			page = in_page
			unsubscribe = page.subscribe($page=>{
				set_host($page && $page.host)
				set_path($page && $page.path)
				set_params($page && $page.params)
				set_query($page && $page.query)
				set_error($page && $page.error)
			})
		}
		function _page():page_type {
			return page
		}
	})(ctx)
}
export type page_notify_type = ()=>void
export type page_set_type = (new_value:$page_type)=>void
export type page_subscribe_fn_type = (new_value:$page_type)=>void
export type page_subscribe_type = (run:page_subscribe_fn_type)=>Unsubscriber
export interface page_type {
	notify:page_notify_type
	set:page_set_type
	subscribe:page_subscribe_type
}
export interface page_host_type extends Readable<$page_host_type> {}
export interface page_path_type extends Readable<$page_path_type> {}
export interface page_params_type extends Readable<$page_params_type> {}
export interface page_query_type extends Readable<$page_query_type> {}
export interface page_error_type extends Readable<$page_error_type> {}
export interface _page_type {
	():$page_type
	set(in_page:page_type):void
	host:page_host_type
	path:page_path_type
	params:page_params_type
	query:page_query_type
	error:page_error_type
}
