import { _page_b, query_type } from './_page_b'
export function query_b<C extends object = object>(ctx:C): query_type {
	const _page = _page_b<C>(ctx)
	return _page.query
}
