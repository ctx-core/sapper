import { _page_b, page_query_type } from './_page_b'
export function page_query_b<C extends object = object>(ctx:C): page_query_type {
	const _page = _page_b<C>(ctx)
	return _page.query
}
