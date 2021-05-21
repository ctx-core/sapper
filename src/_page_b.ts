import { _b, assign } from '@ctx-core/object'
import { _readable_set_ctx$, Readable$, Unsubscriber } from '@ctx-core/store'
import { event_log_b, event_log_Ctx } from '@ctx-core/event-log'
import type {
	$page_T, $page_host_T, $page_path_T, $page_params_T, $page_query_T, $page_error_T
} from './page'
const key = '_page'
export interface _page_Ctx extends event_log_Ctx {
	_page?:_page_T
}
export function _page_b(ctx:_page_Ctx) {
	return _b<_page_Ctx, typeof key>(key, ()=>{
		let page:page_T, unsubscribe:Unsubscriber
		const event_log = event_log_b(ctx)
		const { store: host, set: set_host } = _readable_set_ctx$<null|$page_host_T>(null)
		host.subscribe($host=>event_log.add({ $host }))
		const { store: path, set: set_path } = _readable_set_ctx$<null|$page_path_T>(null)
		path.subscribe($path=>event_log.add({ $path }))
		const { store: params, set: set_params } = _readable_set_ctx$<null|$page_params_T>(null)
		params.subscribe($params=>event_log.add({ $params }))
		const { store: query, set: set_query } = _readable_set_ctx$<null|$page_query_T>(null)
		query.subscribe($query=>event_log.add({ $query }))
		const { store: error, set: set_error } = _readable_set_ctx$<null|$page_error_T>(null)
		error.subscribe($error=>event_log.add({ $error }))
		return assign(_page, {
			set, host, path, params, query, error,
		}) as unknown as _page_T
		function set(in_page:page_T) {
			if (unsubscribe) {
				unsubscribe()
			}
			page = in_page
			unsubscribe = page.subscribe($page=>{
				event_log.add({ $page })
				set_host($page && $page.host)
				set_path($page && $page.path)
				set_params($page && $page.params)
				set_query($page && $page.query)
				set_error($page && $page.error)
			})
		}
		function _page():page_T {
			return page
		}
	})(ctx)
}
export type page_notify_T = ()=>void
export type page_set_T = (new_value:$page_T)=>void
export type page_subscribe_fn_T = (new_value:$page_T)=>void
export type page_subscribe_T = (run:page_subscribe_fn_T)=>Unsubscriber
export interface page_I {
	notify:page_notify_T
	set:page_set_T
	subscribe:page_subscribe_T
}
export type page_T = page_I|Readable$<$page_T>
export interface page_host_T extends Readable$<$page_host_T> {}
export interface page_path_T extends Readable$<$page_path_T> {}
export interface page_params_T extends Readable$<$page_params_T> {}
export interface page_query_T extends Readable$<$page_query_T> {}
export interface page_error_T extends Readable$<$page_error_T> {}
export interface _page_T {
	():page_T
	set(in_page:page_T):void
	host:page_host_T
	path:page_path_T
	params:page_params_T
	query:page_query_T
	error:page_error_T
}
