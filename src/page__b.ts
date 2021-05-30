import { _b, assign } from '@ctx-core/object'
import { _readable_set_ctx$, Readable$, Unsubscriber } from '@ctx-core/store'
import { event_log$_b } from '@ctx-core/event-log'
import type {
	$page_T, page_host_T, page_path_T, page_params_T, page_query_T, page_error_T
} from './page'
import type { sapper_Ctx } from './sapper_Ctx'
import type { page_host$_T } from './page_host$_b'
import type { page_path$_T } from './page_path$_b'
import type { page_params$_T } from './page_params$_b'
import type { page_query$_T } from './page_query$_b'
import type { page_error$_T } from './page_error$_b'
const key = 'page_'
export function page__b(ctx:sapper_Ctx) {
	return _b<sapper_Ctx, typeof key>(key, ()=>{
		let page:page_T, unsubscribe:Unsubscriber
		const event_log$ = event_log$_b(ctx)
		const { store: host, set: set_host } = _readable_set_ctx$<null|page_host_T>(null)
		host.subscribe($host=>event_log$.add({ $host }))
		const { store: path, set: set_path } = _readable_set_ctx$<null|page_path_T>(null)
		path.subscribe($path=>event_log$.add({ $path }))
		const { store: params, set: set_params } = _readable_set_ctx$<null|page_params_T>(null)
		params.subscribe($params=>event_log$.add({ $params }))
		const { store: query, set: set_query } = _readable_set_ctx$<null|page_query_T>(null)
		query.subscribe($query=>event_log$.add({ $query }))
		const { store: error, set: set_error } = _readable_set_ctx$<null|page_error_T>(null)
		error.subscribe($error=>event_log$.add({ $error }))
		return assign(page_, {
			set, host, path, params, query, error,
		}) as unknown as page__T
		function set(in_page:page_T) {
			if (unsubscribe) {
				unsubscribe()
			}
			page = in_page
			unsubscribe = page.subscribe($page=>{
				event_log$.add({ $page })
				set_host($page && $page.host)
				set_path($page && $page.path)
				set_params($page && $page.params)
				set_query($page && $page.query)
				set_error($page && $page.error)
			})
		}
		function page_():page_T {
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
export interface page__T {
	():page_T
	set(in_page:page_T):void
	host$:page_host$_T
	path$:page_path$_T
	params$:page_params$_T
	query$:page_query$_T
	error$:page_error$_T
}
