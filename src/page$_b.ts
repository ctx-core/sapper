import { event_log$_b } from '@ctx-core/event-log'
import { be_, assign } from '@ctx-core/object'
import { readable$_set_ctx_, writable$, Writable$ } from '@ctx-core/store'
import type { PageParams, Query, PageContext } from './page.js'
import type { page_error$_T } from './page_error$_b'
import type { page_host$_T } from './page_host$_b.js'
import type { page_params$_T } from './page_params$_b.js'
import type { page_path$_T } from './page_path$_b.js'
import type { page_query$_T } from './page_query$_b.js'
import type { sapper_Ctx } from './sapper_Ctx.js'
const key = 'page$'
export const page$_b = be_<sapper_Ctx, typeof key>(key, ctx=>{
	const event_log$ = event_log$_b(ctx)
	const { store: host$, set: set_host } = readable$_set_ctx_<string|undefined>(undefined)
	host$.subscribe(host=>event_log$.add({ host }))
	const { store: path$, set: set_path } = readable$_set_ctx_<string|undefined>(undefined)
	path$.subscribe(path=>event_log$.add({ path }))
	const { store: params$, set: set_params } = readable$_set_ctx_<PageParams|undefined>(undefined)
	params$.subscribe(params=>event_log$.add({ params }))
	const { store: query$, set: set_query } = readable$_set_ctx_<Query|undefined>(undefined)
	query$.subscribe(query=>event_log$.add({ query }))
	const { store: error$, set: set_error } = readable$_set_ctx_<Error|undefined>(undefined)
	error$.subscribe(error=>event_log$.add({ error }))
	const page$ = writable$<PageContext|null>(null)
	page$.subscribe(page=>{
		event_log$.add({ page })
		set_host(page?.host)
		set_path(page?.path)
		set_params(page?.params)
		set_query(page?.query)
		set_error(page?.error)
	})
	return assign(page$, {
		host$, path$, params$, query$, error$,
	}) as page$_T
})
export interface page$_T extends Writable$<PageContext> {
	host$:page_host$_T
	path$:page_path$_T
	params$:page_params$_T
	query$:page_query$_T
	error$:page_error$_T
}
