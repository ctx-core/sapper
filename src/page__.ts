import { event_log__ } from '@ctx-core/event-log'
import { atom_, split_atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import type { PageContext, PageParams, Query } from './page.js'
import type { page_error__T } from './page_error__'
import type { page_host__T } from './page_host__.js'
import type { page_params__T } from './page_params__.js'
import type { page_path__T } from './page_path__.js'
import type { page_query__T } from './page_query__.js'
export const page__ = be_<page__T>('page__', ctx=>{
	const event_log_ = event_log__(ctx)
	const [host_, set_host] = split_atom_<string|undefined>(undefined)
	host_.subscribe(host=>event_log_.add({ host }))
	const [path_, set_path] = split_atom_<string|undefined>(undefined)
	path_.subscribe(path=>event_log_.add({ path }))
	const [params_, set_params] = split_atom_<PageParams|undefined>(undefined)
	params_.subscribe(params=>event_log_.add({ params }))
	const [query_, set_query] = split_atom_<Query|undefined>(undefined)
	query_.subscribe(query=>event_log_.add({ query }))
	const [error_, set_error] = split_atom_<Error|undefined>(undefined)
	error_.subscribe(error=>event_log_.add({ error }))
	const page_ = atom_<PageContext|null>(null)
	page_.subscribe(page=>{
		event_log_.add({ page })
		set_host(page?.host)
		set_path(page?.path)
		set_params(page?.params)
		set_query(page?.query)
		set_error(page?.error)
	})
	return assign(page_, {
		host_, path_, params_, query_, error_,
	}) as page__T
})
export interface page__T extends WritableAtom_<PageContext> {
	host_:page_host__T
	path_:page_path__T
	params_:page_params__T
	query_:page_query__T
	error_:page_error__T
}
export { page__ as page$_ }
