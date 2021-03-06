import { be, assign } from '@ctx-core/object'
import { readable$_set_ctx_, Readable$, Unsubscriber } from '@ctx-core/store'
import { event_log$_b } from '@ctx-core/event-log'
import type {
	page_T, page_host_T, page_path_T, page_params_T, page_query_T, page_error_T
} from './page.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
import type { page_host$_T } from './page_host$_b.js'
import type { page_path$_T } from './page_path$_b.js'
import type { page_params$_T } from './page_params$_b.js'
import type { page_query$_T } from './page_query$_b.js'
import type { page_error$_T } from './page_error$_b'
const key = 'page$_'
export function page$__b(ctx:sapper_Ctx):page$__T {
	return be<sapper_Ctx, typeof key, page$__T>(ctx, key, ()=>{
		let page$:page$_T, unsubscribe:Unsubscriber
		const event_log$ = event_log$_b(ctx)
		const { store: host$, set: set_host } = readable$_set_ctx_<page_host_T|undefined>(undefined)
		host$.subscribe(host=>event_log$.add({ host }))
		const { store: path$, set: set_path } = readable$_set_ctx_<page_path_T|undefined>(undefined)
		path$.subscribe(path=>event_log$.add({ path }))
		const { store: params$, set: set_params } = readable$_set_ctx_<page_params_T|undefined>(undefined)
		params$.subscribe(params=>event_log$.add({ params }))
		const { store: query$, set: set_query } = readable$_set_ctx_<page_query_T|undefined>(undefined)
		query$.subscribe(query=>event_log$.add({ query }))
		const { store: error$, set: set_error } = readable$_set_ctx_<page_error_T|undefined>(undefined)
		error$.subscribe(error=>event_log$.add({ error }))
		return assign(page$_, {
			set, host$, path$, params$, query$, error$,
		} as page$__I) as page$__T
		function set(in_page:page$_T) {
			if (unsubscribe) {
				unsubscribe()
			}
			page$ = in_page
			unsubscribe = page$.subscribe(page=>{
				event_log$.add({ page })
				set_host(page?.host)
				set_path(page?.path)
				set_params(page?.params)
				set_query(page?.query)
				set_error(page?.error)
			})
		}
		function page$_():page$_T {
			return page$
		}
	})
}
export type page_notify_T = ()=>void
export type page_set_T = (new_value:page_T)=>void
export type page_subscribe_fn_T = (new_value:page_T)=>void
export type page_subscribe_T = (run:page_subscribe_fn_T)=>Unsubscriber
export type page$_T = Readable$<page_T>&{
	notify:page_notify_T
	set:page_set_T
	subscribe:page_subscribe_T
}
export interface page$__I {
	set(in_page:page$_T):void
	host$:page_host$_T
	path$:page_path$_T
	params$:page_params$_T
	query$:page_query$_T
	error$:page_error$_T
}
export type page$__T = (()=>page$_T)&page$__I
