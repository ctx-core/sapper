import { event_log$_b } from '@ctx-core/event-log'
import { be_, assign } from '@ctx-core/object'
import { split_atom$, atom$, WritableAtom$ } from '@ctx-core/nanostores'
import type { PageParams, Query, PageContext } from './page.js'
import type { page_error$_T } from './page_error$_b'
import type { page_host$_T } from './page_host$_b.js'
import type { page_params$_T } from './page_params$_b.js'
import type { page_path$_T } from './page_path$_b.js'
import type { page_query$_T } from './page_query$_b.js'
const key = 'page$'
export const page$_b = be_<page$_T>(key, ctx=>{
	const event_log$ = event_log$_b(ctx)
	const [host$, set_host] = split_atom$<string|undefined>(undefined)
	host$.subscribe(host=>event_log$.add({ host }))
	const [path$, set_path] = split_atom$<string|undefined>(undefined)
	path$.subscribe(path=>event_log$.add({ path }))
	const [params$, set_params] = split_atom$<PageParams|undefined>(undefined)
	params$.subscribe(params=>event_log$.add({ params }))
	const [query$, set_query] = split_atom$<Query|undefined>(undefined)
	query$.subscribe(query=>event_log$.add({ query }))
	const [error$, set_error] = split_atom$<Error|undefined>(undefined)
	error$.subscribe(error=>event_log$.add({ error }))
	const page$ = atom$<PageContext|null>(null)
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
export interface page$_T extends WritableAtom$<PageContext> {
	host$:page_host$_T
	path$:page_path$_T
	params$:page_params$_T
	query$:page_query$_T
	error$:page_error$_T
}
