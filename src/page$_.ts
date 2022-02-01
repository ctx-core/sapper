import { event_log$_ } from '@ctx-core/event-log'
import { assign, be_ } from '@ctx-core/object'
import { atom$, split_atom$, WritableAtom$ } from '@ctx-core/nanostores'
import type { PageContext, PageParams, Query } from './page.js'
import type { page_error$_T } from './page_error$_'
import type { page_host$_T } from './page_host$_.js'
import type { page_params$_T } from './page_params$_.js'
import type { page_path$_T } from './page_path$_.js'
import type { page_query$_T } from './page_query$_.js'
export const page$_ = be_<page$_T>('page$', ctx=>{
	const event_log$ = event_log$_(ctx)
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
