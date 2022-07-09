import { event_log__add } from '@ctx-core/event-log'
import { atom_, split_atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const page__ = be_('page__', (ctx)=>{
	const [host_, set_host] = split_atom_(undefined)
	host_.subscribe(host=>event_log__add(ctx, {
		host
	}))
	const [path_, set_path] = split_atom_(undefined)
	path_.subscribe(path=>event_log__add(ctx, {
		path
	}))
	const [params_, set_params] = split_atom_(undefined)
	params_.subscribe(params=>event_log__add(ctx, {
		params
	}))
	const [query_, set_query] = split_atom_(undefined)
	query_.subscribe(query=>event_log__add(ctx, {
		query
	}))
	const [error_, set_error] = split_atom_(undefined)
	error_.subscribe(error=>event_log__add(ctx, {
		error
	}))
	const page_ = atom_(null)
	page_.subscribe(page=>{
		event_log__add(ctx, { page })
		set_host(page?.host)
		set_path(page?.path)
		set_params(page?.params)
		set_query(page?.query)
		set_error(page?.error)
	})
	return assign(page_, {
		host_,
		path_,
		params_,
		query_,
		error_
	})
})
export { page__ as page$_ }
